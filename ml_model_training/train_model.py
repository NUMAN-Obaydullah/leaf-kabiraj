import json
from pathlib import Path

import tensorflow as tf
from tensorflow.keras import layers
from tensorflow.keras.preprocessing.image import ImageDataGenerator


BASE_DIR = Path(__file__).resolve().parent.parent
DEFAULT_DATASET_DIR = BASE_DIR / 'ml_model_training' / 'dataset' / 'PlantVillage'
OUTPUT_DIR = BASE_DIR / 'ml_model'
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

MODEL_PATH = OUTPUT_DIR / 'plant_disease_model.h5'
LABELS_PATH = OUTPUT_DIR / 'class_names.json'

IMG_HEIGHT, IMG_WIDTH = 224, 224
BATCH_SIZE = 32
EPOCHS_HEAD = 8
EPOCHS_FINE = 6
VALIDATION_SPLIT = 0.2
SEED = 42


def resolve_dataset_dir(dataset_dir: Path) -> Path:
    nested = dataset_dir / 'PlantVillage'
    if nested.exists() and nested.is_dir():
        return nested
    return dataset_dir


def build_data_generators(dataset_dir: Path):
    preprocess = tf.keras.applications.efficientnet.preprocess_input

    train_datagen = ImageDataGenerator(
        preprocessing_function=preprocess,
        validation_split=VALIDATION_SPLIT,
        rotation_range=20,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.15,
        horizontal_flip=True,
        fill_mode='nearest',
    )
    val_datagen = ImageDataGenerator(
        preprocessing_function=preprocess,
        validation_split=VALIDATION_SPLIT,
    )

    train_data = train_datagen.flow_from_directory(
        str(dataset_dir),
        target_size=(IMG_HEIGHT, IMG_WIDTH),
        batch_size=BATCH_SIZE,
        class_mode='categorical',
        subset='training',
        shuffle=True,
        seed=SEED,
    )
    val_data = val_datagen.flow_from_directory(
        str(dataset_dir),
        target_size=(IMG_HEIGHT, IMG_WIDTH),
        batch_size=BATCH_SIZE,
        class_mode='categorical',
        subset='validation',
        shuffle=False,
        seed=SEED,
    )
    return train_data, val_data


def build_model(num_classes: int):
    base_model = tf.keras.applications.EfficientNetB0(
        include_top=False,
        weights='imagenet',
        input_shape=(IMG_HEIGHT, IMG_WIDTH, 3),
    )
    base_model.trainable = False

    model = tf.keras.Sequential([
        base_model,
        layers.GlobalAveragePooling2D(),
        layers.Dropout(0.3),
        layers.Dense(num_classes, activation='softmax'),
    ])

    model.compile(
        optimizer=tf.keras.optimizers.Adam(learning_rate=1e-3),
        loss='categorical_crossentropy',
        metrics=['accuracy'],
    )
    return model, base_model


def save_class_names(class_indices: dict[str, int], labels_path: Path) -> None:
    class_names = [name for name, _ in sorted(class_indices.items(), key=lambda item: item[1])]
    with labels_path.open('w', encoding='utf-8') as f:
        json.dump(class_names, f, indent=2)


def main() -> None:
    dataset_dir = resolve_dataset_dir(DEFAULT_DATASET_DIR)
    train_data, val_data = build_data_generators(dataset_dir)

    model, base_model = build_model(len(train_data.class_indices))

    callbacks = [
        tf.keras.callbacks.EarlyStopping(monitor='val_accuracy', patience=4, restore_best_weights=True),
        tf.keras.callbacks.ReduceLROnPlateau(monitor='val_loss', factor=0.3, patience=2, min_lr=1e-6),
    ]

    model.fit(
        train_data,
        validation_data=val_data,
        epochs=EPOCHS_HEAD,
        callbacks=callbacks,
    )

    base_model.trainable = True
    for layer in base_model.layers[:-30]:
        layer.trainable = False
    for layer in base_model.layers[-30:]:
        if isinstance(layer, layers.BatchNormalization):
            layer.trainable = False

    model.compile(
        optimizer=tf.keras.optimizers.Adam(learning_rate=1e-5),
        loss='categorical_crossentropy',
        metrics=['accuracy'],
    )

    model.fit(
        train_data,
        validation_data=val_data,
        epochs=EPOCHS_HEAD + EPOCHS_FINE,
        initial_epoch=EPOCHS_HEAD,
        callbacks=callbacks,
    )

    model.save(str(MODEL_PATH))
    save_class_names(train_data.class_indices, LABELS_PATH)

    print(f'Model saved to {MODEL_PATH}')
    print(f'Class names saved to {LABELS_PATH}')
    print(f'Class count: {len(train_data.class_indices)}')


if __name__ == '__main__':
    main()
