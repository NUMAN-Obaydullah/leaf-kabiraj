from django.urls import path
from . import views
from .api_views import LeafImageListCreateView, LeafImageDetailView, PredictDiseaseView 

urlpatterns = [
    # Template-based views
    path('upload/', views.upload_leaf_image, name='upload_leaf_image'),
    path('success/<int:leaf_id>/', views.upload_success, name='upload_success'),
    path('list/', views.leaf_image_list, name='leaf_image_list'),
    path('manual/', views.manual, name='manual'),
    path('how-it-works/', views.how_it_works, name='how_it_works'),
    path('chat/', views.chat_view, name='chat_view'),
    path('chat/api/', views.chat_api, name='chat_api'),

    #DRF API views
    path('api/images/', LeafImageListCreateView.as_view(), name='leafimage-list-create'),
    path('api/images/<int:pk>/', LeafImageDetailView.as_view(), name='leafimage-detail'),
    path('api/predict/', PredictDiseaseView.as_view(), name='predict-disease'),
]


