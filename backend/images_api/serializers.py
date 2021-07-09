from rest_framework import serializers

from .models import ImageName

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageName
        fields = 'id', 'image'