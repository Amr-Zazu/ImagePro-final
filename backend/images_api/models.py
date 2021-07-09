from django.db import models

# str(instance.id),

# Create your models here.
def nameFile(instance,  filename):
    # print(instance)
    return '/'.join(['images', filename])

class ImageName(models.Model):
    # title = models.CharField(max_length=100 , default='SOME STRING')
    # description = models.CharField(max_length=500 , default='SOME STRING')
    # image = models.ImageField(upload_to='images')
    image = models.ImageField(upload_to=nameFile, blank=True, null=True)
