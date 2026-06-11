"""
URL configuration for smart_crop project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.views.static import serve
from detection import views as detection_views


urlpatterns = [
    path('', detection_views.home, name='home'),
    path('admin/', admin.site.urls),
    path('detection/',include('detection.urls')),
    path('accounts/', include('allauth.urls')), #Allauth URLs for user authentication
    path('api/auth/', include('accounts.urls')), #Custom authentication URLs
]

# Serve local media files in local/dev setup even when DEBUG is False.
if getattr(settings, 'MEDIA_URL', '').startswith('/'):
    media_prefix = settings.MEDIA_URL.lstrip('/').rstrip('/')
    urlpatterns += [
        re_path(rf'^{media_prefix}/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
    ]

