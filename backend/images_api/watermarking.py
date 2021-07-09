import PIL
from PIL import Image
from cv2 import cv2
from PIL import ImageFilter
from PIL import ImageEnhance
import numpy as np  
import array 
from math import log10, sqrt 
# import matplotlib.pyplot as plt

from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
import os






@api_view(['POST'])
def watermarking(request):
    if request.method == 'POST':
        the_image = request.data['image_path']
        the_watermark = request.data['watermark_image_path']
        print(request.data)
        print(the_image)
        print(the_watermark)

        img = Image.open(the_image)
        logo = Image.open(the_watermark)

        if img.height > logo.height and img.width > logo.width:

            # padding the watermark
            # read logo
            img1 = cv2.imread(the_watermark)
            ht, wd, cc = img1.shape
            img2 = cv2.imread(the_image)
            h_img, w_img, _ = img2.shape
            # create new image of desired size and color (white) for padding
            ww = w_img
            hh = h_img
            color = (255, 255, 255)
            result = np.full((hh, ww, cc), color, dtype=np.uint8)
            # compute center offset
            xx = (ww - wd) // 2
            yy = (hh - ht) // 2
            # copy img image into center of result image
            result[yy:yy+ht, xx:xx+wd] = img1
            # save result
            cv2.imwrite("mylogo_padded.jpg", result)
        else:
            new_image = logo.resize((img.width, img.height))
            new_image.save('mylogo_padded.jpg')

        # watermark image
        imgArr = np.array(img)
        logo = Image.open("mylogo_padded.jpg")
        logoArr = np.array(logo)
        gray = img.convert("L")
        grayImgArr = np.array(gray)
        logoGray = img.convert("L")
        logoGrayImgArr = np.array(logoGray)
        # contrast and entropy arrays
        weber = np.array(gray).astype(float)
        weber2 = np.array(gray).astype(float)
        H = np.array(gray).astype(float)
        H2 = np.array(gray).astype(float)
        # equations variables
        J = np.array(gray).astype(float)
        J2 = np.array(gray).astype(float)
        alpha = np.array(gray).astype(float)
        beta = np.array(gray).astype(float)
        # final image array
        final_image = np.array(img)
        # calculate pixels contrsat value


        def contrastSensitivity(image):
            print("calculating contrast senstivity.......")

            for x in range(gray.width):
                for y in range(gray.height):
                    grayImgArr[y][x] = gray.getpixel((x, y))
                    weber[y][x] = np.float(abs(grayImgArr[y][x]-128) / 128)
            for x in range(logoGray.width):
                for y in range(logoGray.height):
                    logoGrayImgArr[y][x] = logoGray.getpixel((x, y))
                    weber2[y][x] = np.float(abs(logoGrayImgArr[y][x]-128) / 128)


        # calculate the entropy of each pixel with 4*4 neighbourhood
        def entropy(signal):
            '''
            function returns entropy of a signal
            signal must be a 1-D numpy array
            '''
            lensig = signal.size
            symset = list(set(signal))
            numsym = len(symset)
            propab = [np.size(signal[signal == i])/(1.0*lensig) for i in symset]
            ent = np.sum([p*np.log2(1.0/p) for p in propab])
            return ent


        def entropy_H():
            print("calculating entropy.......")
            N = 2
            S = grayImgArr.shape
            for row in range(S[0]):
                for col in range(S[1]):
                    Lx = np.max([0, col-N])
                    Ux = np.min([S[1], col+N])
                    Ly = np.max([0, row-N])
                    Uy = np.min([S[0], row+N])
                    region = grayImgArr[Ly:Uy, Lx:Ux].flatten()
                    H[row, col] = entropy(region)
            S = logoGrayImgArr.shape
            for row in range(S[0]):
                for col in range(S[1]):
                    Lx = np.max([0, col-N])
                    Ux = np.min([S[1], col+N])
                    Ly = np.max([0, row-N])
                    Uy = np.min([S[0], row+N])
                    region = logoGrayImgArr[Ly:Uy, Lx:Ux].flatten()
                    H2[row, col] = entropy(region)


        # calculate the visual factor from all the previous variables
        def visualFactor():
            print("calculating visual factor.......")
            for x in range(img.width):
                for y in range(img.height):
                    J[y][x] = weber[y][x] * H[y][x]
                    J2[y][x] = weber2[y][x] * H2[y][x]


        def embeddingWatermark(a, b, c, d):
            print("embedding watermark.......")
            for x in range(img.width):
                for y in range(img.height):
                    alpha[y][x] = (b-a) * (J[y][x] - np.amin(J)) / \
                        (np.amax(J) - np.amin(J)) + a
                    beta[y][x] = (d-c) * (J2[y][x] - np.amin(J2)) / \
                        (np.amax(J2) - np.amin(J2)) + c
                    final_image[y][x] = alpha[y][x] * imgArr[y][x] + beta[y][x] * logoArr[y][x]
                    if y == img.height/4 and x == img.width/4:
                        print("25%...")
                    if y == img.height/2 and x == img.width/2:
                        print("50%...")
                    if y == img.height/6 and x == img.width/6:
                        print("75%...")

            final = Image.fromarray(final_image)
            # file_name = ("a; "+str(a) + "b; "+str(b) + "c; " +
            #             str(c) + "d; " + str(d) + ".jpg")
            file_name = ('images/watermarked.png')

            final.save(file_name)  # final image
            print(file_name)
            # print(file_name)
            # print(file_name)
            # os.replace("", "images/secret.png")


        contrastSensitivity(img)
        entropy_H()
        visualFactor()
        embeddingWatermark(0.6999999999999998, 0.8, 0.24999999999999994, 0.1160)
        cv2.waitKey(0)


        return Response(
           data={
               "message": "Watermarking Image Applied",                
               "watermarked_image": 'http://localhost:8000/media/images/watermarked.png',
            #    "secret_image": "http://localhost:8000/media/_secret.png"
               },
               status=status.HTTP_201_CREATED
           )