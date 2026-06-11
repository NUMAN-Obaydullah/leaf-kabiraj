import json
from django.shortcuts import render, redirect, get_object_or_404
from django.core.files.storage import default_storage
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from .forms import LeafImageForm
from .models import LeafImage
from .ml_models.predict import predict_disease
from PIL import Image
from .remedies import get_disease_details, query_llm_chat

# Upload form using HTML template
def upload_leaf_image(request):
    if request.method == 'POST':
        form = LeafImageForm(request.POST, request.FILES)
        if form.is_valid():
            leaf_image = form.save()
            return redirect('upload_success', leaf_id=leaf_image.pk)
    else:
        form = LeafImageForm()
    return render(request, 'detection/upload_image.html', {'form': form})

# Success page with prediction results
def upload_success(request, leaf_id):
    leaf = get_object_or_404(LeafImage, pk=leaf_id)

    try:
        with default_storage.open(leaf.image.name, 'rb') as f:
            img = Image.open(f)
            img = img.convert("RGB")
            prediction, confidence = predict_disease(img)
            
            # Persist diagnosis details to the database for historical logs
            leaf.predicted_label = prediction
            leaf.confidence_score = confidence
            leaf.save(update_fields=['predicted_label', 'confidence_score'])
    except Exception as e:
        prediction, confidence = None, None
        print("Prediction Error:", e)

    # Retrieve AI-powered disease description and home remedies from Gemini API or local fallback
    remedy_details = None
    if prediction:
        remedy_details = get_disease_details(prediction)

    return render(request, 'detection/upload_success.html', {
        'leaf': leaf,
        'prediction': prediction,
        'confidence': confidence,
        'remedy_details': remedy_details
    })

# List all uploaded images
def leaf_image_list(request):
    images = LeafImage.objects.all().order_by('-date_uploaded')
    return render(request, 'detection/list_images.html', {'images': images})

# Home page view
def home(request):
    return render(request, 'detection/home.html')

# Manual page view
def manual(request):
    return render(request, 'detection/manual.html')

# Educational guide view
def how_it_works(request):
    return render(request, 'detection/how_it_works.html')

# AI Agricultural Chat views
@ensure_csrf_cookie
def chat_view(request):
    return render(request, 'detection/chat.html')

def chat_api(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            message = data.get("message", "")
            history = data.get("history", [])
            if not message:
                return JsonResponse({"error": "Empty message"}, status=400)
            
            reply = query_llm_chat(message, history)
            return JsonResponse({"reply": reply})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
    return JsonResponse({"error": "Method not allowed"}, status=405)

