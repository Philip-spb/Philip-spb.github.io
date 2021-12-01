---
layout: default
title: "Графический анализ данных и функций"
grand_parent: "Конспекты"
parent: "Python"
nav_order: 6
---

# Графический анализ данных и функций

## Рисование 2D графиков функций

```py
import numpy as np
import matplotlib.pyplot as plt

x = np.arange(-5,5, 0.5)
y = x**2 + np.sin(x)

plt.figure()
plt.scatter(x,y, marker='*', c='r')
plt.show()
```

![График 1](/assets/images/plt1.png)

**График с линией**

 ```py
plt.figure()
plt.plot(x,y)
plt.show()
 ```
![График 2](/assets/images/plt2.png)

**Добавляем подписи осей и заголовок**

```py
plt.figure()
plt.plot(x,y, 'r')
plt.xlabel('x')
plt.ylabel('$y=x^2 + sin(x)$')
plt.title('Парабола с синусоидой')
plt.show()
```

![График 3](/assets/images/plt3.png)


**Совмещаем несколько графиков**

```py
plt.figure()
plt.plot(x, y, 'r', y, x, 'g')
plt.xlabel('x')
plt.ylabel('$y=x^2 + sin(x), x=x(y)$')
plt.title('Парабола с синусоидой + обратное соответствие')
plt.show()
```

![График 4](/assets/images/plt4.png)

**Сохраняем файл графика**

```py
x1 = np.arange(-5, 20, 0.5)
dirname = '/content/drive/My Drive/Colab Notebooks/COMP_MATH/1_4 Numpy/'
plt.figure(figsize=(8,6))
plt.plot(x, y, 'r')
plt.plot(x1, x1, 'b', linestyle='--')
plt.plot(y, x, 'g')
plt.xlabel('x')
plt.ylabel('$y=x^2 + sin(x), x=x(y)$')
plt.title('Парабола с синусоидой + обратное соответствие')
plt.savefig(dirname+'plt_xy.png')
plt.savefig(dirname+'plt_xy.svg')
```

![График 5](/assets/images/plt_xy.png)

**Готовим облако тегов**

```py
from wordcloud import WordCloud

dirname = '/content/drive/My Drive/Colab Notebooks/COMP_MATH/1_4 Numpy/'
with open(dirname + 'comp_methods_1.txt', mode='r') as f:
  text = f.read()

wordcloud = WordCloud(width=300, max_font_size=60, stopwords=[], max_words=70, min_font_size=6).generate(text)

pics_arr = wordcloud.to_array()
pics_arr.shape

plt.figure(figsize=(12,8))
plt.imshow(wordcloud)
plt.axis('off')
plt.show()
```

![График 6](/assets/images/plt6.png)

**Выводим одновременно несколько графиков**

```py
fig, axes = plt.subplots(2)
axes[0].plot(x, y, 'r')
axes[1].plot(y, x, 'g')
```

![График 7](/assets/images/plt7.png)

## Рисование 3D графиков функций

```py
import numpy as np
import matplotlib.pyplot as plt
plt.style.use('ggplot')
from mpl_toolkits import mplot3d
fig = plt.figure()
ax = plt.axes(projection='3d')
zline = np.linspace(0,15,1000)
xline = np.sin(zline)
yline = np.cos(zline)
ax.plot(xline, yline, zline, 'gray')
zdata = 15 * np.random.random(100)
xdata = np.sin(zdata) + 0.1 * np.random.rand(100)
ydata = np.cos(zdata) + 0.1 * np.random.rand(100)
ax.scatter(xdata, ydata, zdata, c=zdata, cmap='Greens')
ax.text2D(0.1, 0.9, 'Линия, заданная параметрически $x=\sin(z); y=cos(z)$', 
          transform=ax.transAxes)
```

![График 8](/assets/images/plt8.png)


```py
from matplotlib import cm

def f(x,y):
  return np.sin(np.sqrt(x**2 + y**2))

x = np.linspace(-6, 6, 30)
y = np.linspace(-6, 6, 30)
X,Y = np.meshgrid(x,y)
Z = f(X,Y)
fig, ax = plt.subplots(figsize=(8,6))
surf = ax.contourf(X,Y,Z, 30, cmap=plt.cm.Spectral)
ax.set_xlabel('x'); ax.set_ylabel('y')
ax.text(0.0, 0.0, '$(0,0)$', color='black')
fig.suptitle('Линия уровня функции $\sin {\sqrt {x^2 + y^2}}$', y=0)
fig.colorbar(surf, shrink=0.9, aspect=5)
fig.show()
```

![График 9](/assets/images/plt9.png)

## Рисование контурных графиков z(x,y) в 3D

```py
fig = plt.figure()
ax = plt.axes(projection='3d')
ax.contour3D(X, Y, Z, 50, cmap='binary')
ax.set_xlabel('x')
ax.set_ylabel('y')
ax.set_zlabel('z')
fig.show()
```

![График 10](/assets/images/plt10.png)

Если угол обзора не оптимален, мы можем задать требуемый угол зрения, образованнный с плоскостью XOY и азимутальный угол вращения XOY относительно оси OZ

```py
ax.view_init(60,30)
```

## Сеточный график

```py
fig = plt.figure()
ax = plt.axes(projection='3d')
ax.plot_wireframe(X, Y, Z, color='black')
```

![График 11](/assets/images/plt11.png)

## Цветоной сеточный график

```py
fig = plt.figure()
ax = plt.axes(projection='3d')
surf = ax.plot_surface(X, Y, Z, rstride=1, cstride=1, cmap='viridis', 
                       edgecolor='black')
fig.colorbar(surf, shrink=0.6, aspect=5)
ax.set_title('surface')
fig.show()
```

![График 12](/assets/images/plt12.png)

 ## Сохранение графиков и чтение их из файла

 ```py
dirname = '/content/drive/My Drive/Colab Notebooks/COMP_MATH/1_4 Numpy/'
fig.savefig(dirname+'plot3d.png')
```

## Чтение графиков из файла

```py
with open(dirname+'plot3d.png', 'rb') as plot_file:
  plot_img = plt.imread(plot_file)

plt.imshow(plot_img)
plt.show()
```