import re
from pylab import *
from PIL import Image, ImageChops, ImageEnhance
from keras.models import load_model
import numpy as np
from numpy import array

from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
import os


np.random.seed(2)

def convert_to_ela(image_path, quality):
    filename = image_path
    resaved_filename = filename.split('.')[0] + '.resaved.jpg'
    ELA_filename = filename.split('.')[0] + '.ela.png'

    im = Image.open(filename).convert('RGB')
    im.save(resaved_filename, 'JPEG', quality=quality)
    resaved_im = Image.open(resaved_filename)

    ela_im = ImageChops.difference(im, resaved_im)

    extrema = ela_im.getextrema()
    max_diff = max([ex[1] for ex in extrema])
    if max_diff == 0:
        max_diff = 1
    scale = 255.0 / max_diff

    ela_im = ImageEnhance.Brightness(ela_im).enhance(scale)
    ela_im.save(ELA_filename, 'PNG')

    return ela_im


def test_image_for_forgery(image_path, model_path):
    model = load_model(model_path)
    test_im = []
    ela_im = convert_to_ela(image_path, 224).resize((224, 224))
    test_im.append(array(ela_im).flatten() / 255.0)
    test_im = np.array(test_im)
    test_im = test_im.reshape(-1, 224, 224, 3)
    verdict = model.predict(test_im)[0]
    prediction = np.argmax(verdict)
    return prediction


@api_view(['POST'])
def forgery_detection(request):
    if request.method == 'POST':
        the_image = request.data['image_path']
        modelpath = 'Forgery Models/MobileNetV1_50ep_8-2_batch8_224elapx_alltrained.h5'
        print(request.data)
        print(the_image)
        print(test_image_for_forgery(the_image, modelpath))
        result = (test_image_for_forgery(the_image, modelpath))
        text = ''
        # if result == '1' 
        # text = 'Imas'


        return Response(
           data={
               "message": "Forgery Detection Applied",
               "result": result
               },
               status=status.HTTP_201_CREATED
           )

# # Two Examples
# modelpath = 'ForgModels/MobileNetV1_50ep_8-2_batch8_224elapx_alltrained.h5'
# forged_example = 'Sp_D_CNN_A_ani0049_ani0084_0266.jpg'
# authentic_example = 'Au_ani_0020.jpg'
# # key: forged = 1, authentic = 0
# print(test_image_for_forgery(forged_example, modelpath))
# print(test_image_for_forgery(authentic_example, modelpath))