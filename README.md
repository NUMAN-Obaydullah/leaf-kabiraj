# 🌾 Leaf Kabiraj - AI Crop Disease Detection System

An AI-powered web application built with Django that detects crop diseases from leaf images using deep learning. Developed by Md Obaydullah Al Numan.

---

## 🚀 Features

- 🌿 Upload leaf images and detect plant diseases with high accuracy.
- 🤖 Integrated trained ML model (TensorFlow/TensorFlow Lite).
- 🗂️ Stores prediction records in a local SQLite database for simple development and testing.
- ☁️ AWS S3 integration for scalable image storage.
- 🔐 User authentication and role-based access control (OAuth support included).
- ⚙️ Background ML inference with Celery (future enhancement).
- 📊 Admin dashboard for managing data.(Currently working on it)
- 📦 Dockerized for easy deployment.
- 🧪 Unit-tested with high coverage.

---

## 🛠️ Tech Stack

| Category         | Tools / Technologies                         |
|------------------|----------------------------------------------|
| Backend          | Django, Django REST Framework                |
| Machine Learning | TensorFlow / TensorFlow Lite, OpenCV         |
| Database         | SQLite                                       |
| Cloud Storage    | AWS S3                                       |
| DevOps           | Docker, Git, GitHub Actions (CI/CD)          |
| Authentication   | Django Allauth / OAuth2 (Google/Facebook)    |
| Future Upgrades  | Celery + Redis (async tasks), Elasticsearch  |

---

## 🖼️ Demo

(SOON WILL POST HERE)
![App Screenshot](https://your-screenshot-url-if-any)

Try it live: [https://smartcrop.example.com](https://smartcrop.example.com) *(if deployed)*

---

## 📂 Project Structure

smart_crop/
│
├── detection/ # App for leaf image handling & prediction
│ ├── models.py # LeafImage model
│ ├── views.py # Upload & prediction logic
│ └── ml/ # Model files (TFLite or H5)
│
├── templates/ # HTML templates (Bootstrap + custom)
├── static/ # Static files (CSS/JS)
├── media/ # Uploaded images (S3 synced)
├── core/ # Project settings and URLs
│ ├── settings.py
│ ├── settings_local.py # Secrets (gitignored)
│
├── Dockerfile
├── docker-compose.yml
├── requirements.txt
└── README.md


---

## 🧠 How It Works

1. **Upload** a crop/leaf image via the web interface.
2. The backend sends the image to a **pre-trained ML model**.
3. The model classifies the disease and returns a prediction.
4. The result is stored in PostgreSQL and optionally searchable via Elasticsearch.

---

## 📸 Sample Predictions

| Image                          | Prediction         | Confidence |
|-------------------------------|--------------------|------------|
| tomato_leaf_01.jpg            | Tomato Early Blight| 92.3%      |
| potato_leaf_02.jpg            | Potato Late Blight | 89.7%      |

---

## ⚙️ Setup Instructions

### Prerequisites

- Python 3.10+
- SQLite (included with Python)
- AWS S3 bucket (optional, only if you keep cloud image storage)
- Docker (optional but recommended)

## 1. Clone the Repository

```bash
git clone https://github.com/yourusername/smart_crop.git
cd smart_crop
````
## 2. Install Dependencies
```bash
pip install -r requirements.txt
```
## 3. Configure Environment
No database service is required for local development. Django will create `db.sqlite3` automatically when you run migrations.
```bash
python manage.py migrate
```
If you still want cloud image storage, keep your AWS settings in `.env`; otherwise you can leave them unset for local DB-only development.
## 4. Run Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```
## 5. Create Superuser
```bash
python manage.py createsuperuser
```
## 6. Use a Pretrained Model (No Training)
Copy your pretrained artifacts to the project model folder:
```bash
# Example target files used by the app
ml_model/plant_disease_model.tflite
ml_model/class_names.json
```

Validate that model output classes match labels:
```bash
python ml_model/validate_pretrained_model.py --model ml_model/plant_disease_model.tflite --labels ml_model/class_names.json
```

Optional: point to a different location using environment variables in `.env`:
```bash
MODEL_TFLITE_PATH=D:/path/to/pretrained_model.tflite
MODEL_LABELS_PATH=D:/path/to/class_names.json
```

## 7. Run the Server
```bash
python manage.py runserver
```

📦 Docker Support
```bash
docker-compose up --build
```

✨ Future Enhancements
✅ Integrate Celery for background model inference.

✅ Add Elasticsearch for full-text search on prediction records.

✅ Advanced filtering (by crop type, confidence, date).

✅ Model retraining from admin panel.

✅ Multilingual support (Hindi, etc.).

🤝 Contributing
Contributions are welcome! Please fork the repo and submit a pull request.

📜 License
MIT License © 2026 Md Obaydullah Al Numan

📧 Project Metadata
Author: Md Obaydullah Al Numan
Technical Help: Square Private Center, Gabtali
🌐 Repository: https://github.com/NUMAN-Obaydullah/leaf-kabiraj.git



