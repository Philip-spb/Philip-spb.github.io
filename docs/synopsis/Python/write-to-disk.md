---
layout: default
title: "Чтение и запись текстов и массивов в файл"
grand_parent: "Конспекты"
parent: "Python"
nav_order: 5
---

# Чтение и запись текстов и массивов в файл

## Сохранение в бинарном формате

```py
import numpy as np

dirname = '/content/drive/My Drive/Colab Notebooks/COMP_MATH/1_4 Numpy/'

Amat = np.arange(12).reshape(3, 4)
Bmat = np.ones(shape=(4,3))

np.save(dirname+'Amat', Amat)  # сохранение в файл данных в двоичном виде с расширением .npy
A2mat = np.load(dirname+'Amat.npy')  # Загрузка данных из файла

np.savez(dirname+'AmatBmat', Amat, Bmat)  # сохранение нескольких массивов в файл
np_arrs = np.load(dirname+'AmatBmat.npz')
print(np_arrs.files)  # ['arr_0', 'arr_1']
```

Чтобы сохранять массивы как имена нх надо передавать как ключи

```py
np.savez(dirname+'AmatBmat', Amat = Amat, Bmat = Bmat)
```

## Сохранение в текстовом формате

```py
np.savetxt(dirname+'Amat.csv', Amat, delimiter=',')
A3mat = np.loadtxt(dirname+'Amat.csv', delimiter=',')
```

## Чтение и запись в файл текстов

```py
f = open(dirname+'comp_methods.txt', mode='r')
text = f.read()
```

Повторное чтение не приведет к загрузке так как повторное чтение начинается с того момента на котором остановился указатиль, а указатиль останавливается в конце документа. Поэтому если необходимо прочитать файл заново - нужно использоват `f.seek(0)`

Можно читать файл построчно

```py
f.seek(0)
for line in f:
  print(line)
```

```py
f.close()  # закрытие файла
```

Чтобы не беспокоиться о закрытии файла можно использовать такую конструкцию:
```py
with open(dirname+'comp_methods.txt', mode='r') as f:
  text = f.read()
```

### Обработка текста – убираем вспомогательные слова

```py
import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords
stopwords = sorted(stopwords.words('russian'))
stopwords1 = ['это', 'можем', 'нам', 'значит']
stopwords += stopwords1
text_list = text.split()
new_text_list = [word for word in text_list if word not in stopwords]
print(f'До обработки: {len(text_list)}')
print(f'После обработки: {len(new_text_list)}')
# До обработки: 60
# После обработки: 39
```
