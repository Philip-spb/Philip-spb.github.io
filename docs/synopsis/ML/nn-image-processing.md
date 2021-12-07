---
layout: default
title: "Нейросетевая обработка изображений"
grand_parent: "Конспекты"
parent: "ML"
nav_order: 4
---

# Нейросетевая обработка изображений

Загрузка изображения

```py
import matplotlib.pyplot as plt
from PIL import Image, ImageDraw
import numpy as np

dirname = '/content/drive/My Drive/Colab Notebooks/pypractik/'
fname = dirname + 'pic1.jpg'
image = Image.open(fname)
```

```py
width, height = image.size
pix = image.load()
pix # PixelAccess
pix[250, 250] # доступ к пикселю
rgb_array = np.asarray(image) #  преобразование изображение в np array
print(rgb_array.shape)
plt.imshow(rgb_array[150:300,:,:])  # Обрезка изображения
```

## Нормировка яркостей

Для обработки нейросетями на вход надо подавать тензора с вещественнымми нормированными числами

Для экономии памяти при работе с большими массивами используют float32

```py
rgb_array_norm = rgb_array / 255
rgb_array_norm = rgb_array_norm.astype('float32')
```

## Добавление шума

Сгенирируем равномерный шум в интервале от -0.3 до 0.3

```py
noise = np.random.random(size=rgb_array_norm.shape) * 0.6 - 0.3
noise.min(), noise.max()  # (-0.29999818241053866, 0.29999963775079413)

rgb_array_noise = rgb_array_norm + noise
rgb_array_noise[rgb_array_noise < 0 ] = 0.0
rgb_array_noise[rgb_array_noise > 1.0 ] = 1.0
```

Сравним изображения

```py
plt.imshow(np.concatenate([rgb_array_norm, rgb_array_noise], axis=1))
```

![Сравнение изображений](/assets/images/plt13.png)

## Создание картинки из тензора

```py
def triangle(width):
    height = int(np.sqrt(3)/2 * width)
    middle = int(width/2)
    step = np.sqrt(3)/3
    
    white_color = np.array([255, 255, 255])
    blue_color = np.array([0, 100, 200])
    
    rgb_array = np.full(shape=(height,width,3), fill_value=255, dtype=np.uint8)

    for i in range(height):
      rgb_array[i:i+1, middle-int(i*step):middle+int(i*step), :] = blue_color
    
    for i in range(int(height/2)):
      rgb_array[height-i:height-i+1, middle-int(i*step):middle+int(i*step), :] = white_color
    
    return rgb_array

im_array = triangle(width=500)
plt.imshow(im_array)
```

![Изображение из тензора](/assets/images/plt14.png)