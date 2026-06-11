from pathlib import Path

import tensorflow as tf


BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR / 'ml_model' / 'plant_disease_model.h5'
OUTPUT_PATH = BASE_DIR / 'ml_model' / 'plant_disease_model.tflite'


def main() -> None:
    model = tf.keras.models.load_model(str(MODEL_PATH))

    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    converter.optimizations = [tf.lite.Optimize.DEFAULT]

    tflite_model = converter.convert()
    OUTPUT_PATH.write_bytes(tflite_model)

    interpreter = tf.lite.Interpreter(model_path=str(OUTPUT_PATH))
    interpreter.allocate_tensors()
    input_shape = interpreter.get_input_details()[0]['shape']
    output_shape = interpreter.get_output_details()[0]['shape']

    print(f'TFLite model saved to {OUTPUT_PATH}')
    print(f'Input shape: {input_shape}')
    print(f'Output shape: {output_shape}')


if __name__ == '__main__':
    main()