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