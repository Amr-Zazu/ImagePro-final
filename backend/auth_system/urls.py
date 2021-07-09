from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework import routers
from django.conf import settings
from django.contrib import admin
from django.conf.urls.static import static
from django.conf.urls import url

from images_api.views import ImageViewSet
from images_api.views import encode_steganography
from images_api.views import decode_steganography
from images_api.watermarking import watermarking
from images_api.forgery_detection import forgery_detection


router = routers.DefaultRouter()
router.register(r'image', ImageViewSet, basename='item')


urlpatterns = [
    # path('api/', include(router.urls)),
    url(r'^api/', include(router.urls)),
    url(r'^admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    path('encode_steganography/', encode_steganography),
    path('decode_steganography/', decode_steganography),
    path('forgeryDetection/', forgery_detection),
    path('watermarking/', watermarking),
    path('manifest.json', TemplateView.as_view(template_name='manifest.json', content_type='application/json'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]


