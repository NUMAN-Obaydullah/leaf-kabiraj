import numpy as np
import tensorflow as tf
from PIL import Image
from django.conf import settings
import json
import os

# Intialize the global variables 
interpreter = None
input_details = None
output_details = None
input_height = None
input_width = None

# Class names must match the exact class index order used during training.
class_names = [
    'Pepper__bell___Bacterial_spot',
    'Pepper__bell___healthy',
    'PlantVillage',
    'Potato___Early_blight',
    'Potato___healthy',
    'Potato___Late_blight',
    'Tomato__Target_Spot',
    'Tomato__Tomato_mosaic_virus',
    'Tomato__Tomato_YellowLeaf__Curl_Virus',
    'Tomato_Bacterial_spot',
    'Tomato_Early_blight',
    'Tomato_healthy',
    'Tomato_Late_blight',
    'Tomato_Leaf_Mold',
    'Tomato_Septoria_leaf_spot',
    'Tomato_Spider_mites_Two_spotted_spider_mite',
]


def load_class_names():
    labels_path = getattr(settings, 'MODEL_LABELS_PATH', os.path.join(settings.BASE_DIR, 'ml_model', 'class_names.json'))
    if os.path.exists(labels_path):
        with open(labels_path, 'r', encoding='utf-8') as f:
            loaded = json.load(f)
        if isinstance(loaded, dict):
            try:
                sorted_classes = sorted(loaded.keys(), key=lambda k: int(loaded[k]))
                return sorted_classes
            except (ValueError, TypeError):
                return list(loaded.keys())
        elif isinstance(loaded, list) and all(isinstance(name, str) for name in loaded):
            return loaded
    return class_names


# Load the TFLite model and allocate tensors
def load_tflite_model():
    global interpreter, input_details, output_details, input_height, input_width
    model_path = getattr(settings, 'MODEL_TFLITE_PATH', os.path.join(settings.BASE_DIR, 'ml_model', 'plant_disease_model.tflite'))
    interpreter = tf.lite.Interpreter(model_path=model_path)
    interpreter.allocate_tensors()
    input_details = interpreter.get_input_details()
    output_details = interpreter.get_output_details()
    input_height = int(input_details[0]['shape'][1])
    input_width = int(input_details[0]['shape'][2])

# Predict disease from a PIL image
def predict_disease(pil_image):
    global interpreter, input_details, output_details, input_height, input_width
# Check if the interpreter is already loaded
    if interpreter is None:
        load_tflite_model()

    current_class_names = load_class_names()

    # Convert to RGB to ensure exactly 3 channels (handles RGBA or Grayscale formats)
    pil_image = pil_image.convert("RGB")

# Resize and preprocess the image
    image = pil_image.resize((input_width, input_height))
    image = np.array(image, dtype=np.float32)
    image = np.expand_dims(image, axis=0)

    model_input_dtype = input_details[0]['dtype']
    if model_input_dtype == np.float32:
        image = image / 255.0
    else:
        image = image.astype(model_input_dtype)

# Ensure the input tensor is of the correct shape

    interpreter.set_tensor(input_details[0]['index'], image)
    interpreter.invoke()
    prediction = interpreter.get_tensor(output_details[0]['index'])

    model_output_dtype = output_details[0]['dtype']
    if model_output_dtype != np.float32:
        scale, zero_point = output_details[0]['quantization']
        if scale not in (0, 0.0):
            prediction = (prediction.astype(np.float32) - zero_point) * scale

    if prediction.shape[-1] != len(current_class_names):
        raise ValueError(
            f"Class mapping mismatch: model outputs {prediction.shape[-1]} classes "
            f"but class_names has {len(current_class_names)} entries."
        )

    predicted_class = np.argmax(prediction, axis=1)[0]
    confidence = float(np.max(prediction)) * 100

    return current_class_names[predicted_class], confidence
