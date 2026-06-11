import argparse
import json
from pathlib import Path

import tensorflow as tf


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description='Validate pretrained TFLite model and labels compatibility.'
    )
    parser.add_argument(
        '--model',
        default='ml_model/plant_disease_model.tflite',
        help='Path to .tflite model file.',
    )
    parser.add_argument(
        '--labels',
        default='ml_model/class_names.json',
        help='Path to labels JSON file (list of class names).',
    )
    return parser.parse_args()


def load_labels(labels_path: Path) -> list[str]:
    if not labels_path.exists():
        raise FileNotFoundError(f'Labels file not found: {labels_path}')

    with labels_path.open('r', encoding='utf-8') as f:
        labels = json.load(f)

    if not isinstance(labels, list) or not all(isinstance(x, str) for x in labels):
        raise ValueError('Labels file must be a JSON array of strings.')

    if not labels:
        raise ValueError('Labels file is empty.')

    return labels


def validate(model_path: Path, labels: list[str]) -> None:
    if not model_path.exists():
        raise FileNotFoundError(f'Model file not found: {model_path}')

    interpreter = tf.lite.Interpreter(model_path=str(model_path))
    interpreter.allocate_tensors()

    input_info = interpreter.get_input_details()[0]
    output_info = interpreter.get_output_details()[0]

    output_shape = output_info['shape']
    num_outputs = int(output_shape[-1])
    if num_outputs != len(labels):
        raise ValueError(
            f'Class mismatch: model outputs {num_outputs} classes, '
            f'but labels file has {len(labels)} entries.'
        )

    print('Validation successful')
    print(f'Model: {model_path}')
    print(f'Labels: {len(labels)} classes')
    print(f'Input shape: {input_info["shape"]}, dtype: {input_info["dtype"]}')
    print(f'Output shape: {output_info["shape"]}, dtype: {output_info["dtype"]}')


def main() -> None:
    args = parse_args()
    model_path = Path(args.model)
    labels_path = Path(args.labels)

    labels = load_labels(labels_path)
    validate(model_path, labels)


if __name__ == '__main__':
    main()
