---
layout: default
title: "Библиотека NumPy"
grand_parent: "Конспекты"
parent: "Python"
nav_order: 4
---

# Библиотека NumPy
{: .no_toc }

## Указатель
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Основные методы

*Основной объект numpy – однородный многомерный массив*

```py
x = np.array(range(5), dtype=str)  # array(['0', '1', '2', '3', '4'], dtype='<U1')
x.shape  # (5,)  – размерность массива
```

```py
x = np.array([[1,2,3], [4,5,6]])
# array([[1, 2, 3],
#        [4, 5, 6]])
```

```py
zeroes_array = np.zeros(shape=(3,4))
# array([[0., 0., 0., 0.],
#        [0., 0., 0., 0.],
#        [0., 0., 0., 0.]])
```

```py
zeroes_array = np.ones(shape=(3,3))
# array([[1., 1., 1.],
#        [1., 1., 1.],
#        [1., 1., 1.]])
```

**Создание массива произвольного размера и заполнение её константами**
```py
array1 = np.full(shape=(2,3), fill_value=7)
# array([[7, 7, 7],
#        [7, 7, 7]])
```

**Единичная матрица**
```py
Emat = np.eye(N=3)
# array([[1., 0., 0.],
#        [0., 1., 0.],
#        [0., 0., 1.]])
```

**Создание матрицы указанной размерности из случайных значений**
```py
Rmat = np.random.random(size=(2,3))
# array([[0.30673558, 0.02313395, 0.98715127],
#        [0.18445517, 0.53445597, 0.28846672]])
```

### Работа с измерениями матрицы

```py
Rmat = np.random.random(size=(3000,100))
print('Число измерений = ', Rmat.ndim)
print('Число измерений = ', Rmat[:,:].ndim)
print('Число измерений = ', Rmat[:,:,np.newaxis].ndim)
# Число измерений =  2
# Число измерений =  2
# Число измерений =  3
```
`ndarray.shape` – размеры массива (кортеж)
`ndarray.ndim` – длина кортежа ndarray.shape

```py
Rmat = np.random.random(size=(3000,100))
print('Число измерений = ', Rmat.shape)
print('Число измерений = ', Rmat[:,:,np.newaxis].shape)
print('Число измерений = ', Rmat[np.newaxis,:,:].shape)
# Число измерений =  (3000, 100)
# Число измерений =  (3000, 100, 1)
# Число измерений =  (1, 3000, 100)
```

`ndarray.size` – количество элементов массива
`ndarray.itemsize` – размер каждого элемента массива в байтах

**Срез матрицы**
```py
Rmat[1:3, 2:9:2]
# array([[0.26272992, 0.79673286, 0.81855101, 0.52193583],
#        [0.34228175, 0.54634559, 0.72438628, 0.59615539]])
```

Можно также просто перечислять необходимые столбцы/строки
```py
my_array = np.array([list(range(10)) for _ in range(10)])
my_array[0:2,[2,4,9]]
# array([[2, 4, 9],
#        [2, 4, 9]])
```

**Копирование массивов**

Копирование возможно осуществлять только таким образом

```py
Emat = np.eye(N=3)
Smat = Emat.copy()
```

## Математические операции с векоторами и матрицами

 * Сложение массивов (одинаковвых размеров)
 * Уможение массива на число
 * Покомпонентное умножение массивов
 * Скалярное умножение массивов
```py
array1 = np.full(shape=(2,3), fill_value=7)
ones_array = np.eye(N=3)
print(array1 @ ones_array)
# array([[7., 7., 7.],
#        [7., 7., 7.]])
```
 * Транспонирование (`ones_array.T`)

### Необычные для математики опреации

**Прибавить / вычесть число**

```py
array1 = np.eye(N=4) + 5
# array([[6., 5., 5., 5.],
#        [5., 6., 5., 5.],
#        [5., 5., 6., 5.],
#        [5., 5., 5., 6.]])
```

**Прибавление к массиву вектора - строки**

```py
Amat = np.zeros(shape=(3,4))+1
bvect = np.array(range(Amat.shape[1]))
print(Amat + bvect)
# array([[1., 2., 3., 4.],
#        [1., 2., 3., 4.],
#        [1., 2., 3., 4.]])
```

## Логические операции с массивами

```py
a = np.array([1,2,3,4])
b = np.array([4,2,2,4])
print(a == b)  # [False  True False  True]
c = a > b
print(c, type(c))  # [False False  True False] <class 'numpy.ndarray'>
```

**Фильрация**

```py
d = np.array([4,1,2,3,5])
e = d > 2
print(e, type(e))  # [ True False False  True  True] <class 'numpy.ndarray'>
d1 = d[e]
print(d1)  # [4 3 5]
```

```py
Cmat = np.array([list(range(10)) for _ in range(10)])
print(Cmat[Cmat > 6])
# [7 8 9 7 8 9 7 8 9 7 8 9 7 8 9 7 8 9 7 8 9 7 8 9 7 8 9 7 8 9]
```

**Присвоение при помощи фильтра**

```py
Dmat = Cmat - 5
Dmat[Dmat < 0] = 0
print(Dmat)
# [[0 0 0 0 0 0 1 2 3 4]
#  [0 0 0 0 0 0 1 2 3 4]
#  [0 0 0 0 0 0 1 2 3 4]
#  [0 0 0 0 0 0 1 2 3 4]
#  [0 0 0 0 0 0 1 2 3 4]
#  [0 0 0 0 0 0 1 2 3 4]
#  [0 0 0 0 0 0 1 2 3 4]
#  [0 0 0 0 0 0 1 2 3 4]
#  [0 0 0 0 0 0 1 2 3 4]
#  [0 0 0 0 0 0 1 2 3 4]]
```

## Полезные методы для работы с массивами

Создание последовательности с указанным шагом
```py
v1 = np.arange(-1000, 10000, 1)
# array([-1000,  -999,  -998, ...,  9997,  9998,  9999])
```

Равномерное распределение интервала с указанным шагом
```py
v2 = np.linspace(0, 100, num=9)
# array([  0. ,  12.5,  25. ,  37.5,  50. ,  62.5,  75. ,  87.5, 100. ])
```

Изменение размерности массива
```py
v2.reshape((3,3))
# [[  0.   12.5  25. ]
#  [ 37.5  50.   62.5]
#  [ 75.   87.5 100. ]]
```
`reshape` не меняет исходную матрицу, `resize` меняет

Разворачивание матрицы в вектор
```py
v2.reshape((3,3)).flatten()
# [  0.   12.5  25.   37.5  50.   62.5  75.   87.5 100. ]
```

### Вычисление СУММЫ, СРЕДНЕГО, МЕДИАНЫ

`mean()` – среднее
`max()` – максимум

```py
Cmat = np.arange(1,13,1).reshape(3,4)
print(Cmat.sum(axis=0))  # [15 18 21 24]  – сумма по столбцам
print(Cmat.sum(axis=1))  # [10 26 42]  – сумма по строкам
```

## Модуль линейной алгебры linalg

Разложение матрицы, нахождение определителя, ранга матрицы, решение системы уравнений

**Создадим матрицу**
```py
Cmat = np.array([[2,4,0,4,1], [2,4,1,1,0], [1,1,1,2,2],[0,1,3,2,4], [2,2,2,0,2]])
# [[2 4 0 4 1]
#  [2 4 1 1 0]
#  [1 1 1 2 2]
#  [0 1 3 2 4]
#  [2 2 2 0 2]]
```

**Обратная матрица**
```py
C1mat = linalg.inv(Cmat)
# [[-0.6   0.4   1.6  -0.6  -0.1 ]
#  [ 0.9  -0.6  -1.9   0.4   0.65]
#  [-1.7   1.8   2.7  -0.2  -1.45]
#  [-0.7   0.8   1.7  -0.2  -0.95]
#  [ 1.4  -1.6  -2.4   0.4   1.4 ]]
```

**Округление значений матрицы**
```py
np.round(Cmat @ C1mat, decimals=2)  # с точностью до двух наков после запятой
# array([[ 1.,  0.,  0.,  0.,  0.],
#        [-0.,  1.,  0.,  0.,  0.],
#        [ 0.,  0.,  1.,  0.,  0.],
#        [ 0.,  0.,  0.,  1.,  0.],
#        [ 0.,  0.,  0.,  0.,  1.]])
```

### Решение системы уравнений

```py
Amat = np.array([[2,1,1],[1,2,1],[1,1,2]])
bvect = np.ones((Amat.shape[0],))
print(bvect)  # [1. 1. 1.]
xvect = linalg.solve(Amat, bvect)
print(xvect)  # [0.25 0.25 0.25]
```

**Приближенное решение системы уравнений**

```py
A1mat = np.vstack([Amat, np.ones((1, Amat.shape[1]))])  #  К матрице Amat прибавим строчку состоящую из единиц
# [[2. 1. 1.]
#  [1. 2. 1.]
#  [1. 1. 2.]
#  [1. 1. 1.]]
```

```py
b1vect = np.ones((A1mat.shape[0],))  # [1. 1. 1. 1.]
```

Таким образом мы получаем количество неизвестных больше чем количество уравнений. Для решения используем функцию приближенного решения с использованием метода наименьших квадратов

```py
xvect = linalg.lstsq(A1mat, b1vect, rcond=None)[0]
# array([0.26315789, 0.26315789, 0.26315789])
```

**Вычисление определеителя**
```py
Am = np.array([[6,0,3],[0,-1,2],[12,3,0]])
linalg.det(Am)
# 0.0
```

**Вычисление собственных чисел матрицы**

```py
Am = np.array([[1,-1,-1,0],[-1,2,-1,-1],[-1,-1,2,-1],[0,-1,-1,1]])
linalg.eigvals(Am)
# array([-1.,  1.,  3.,  3.])
```

## Модуль random в библиотеке numpy

```py
# генерируем число
print(np.random.sample())
# генерируем вектор
print(np.random.sample((3)))
# генерируем матрицу
print(np.random.sample((2,3)))
```

```py
Rmat = np.random.random(size=(100,10))
```

Разделим данные на две выборки – обучающую и валидационную в отношении 60:40

```py
n_learn = int(0.6*len(Rmat))
```

Сгенерируем выборку номеров объектов для обучающей выборки

```py
nums = np.random.choice(range(len(Rmat)), size=n_learn, replace=False)
# если replace=False – значит нельзя выбирать один и тот же элемент несколько раз
# size=n_learn – указываем сколько чисел нужно взять из последовательности
```

Теперь мы можем сформировать две матрицы с валидационной выборкой:
```py
R_learn = Rmat[nums]
notnums = list(set(range(len(Rmat))) - set(nums))  # Вычитаем номера учавствующие в тествой выборке
R_valid = Rmat[notnums]
print(R_learn.shape, R_valid.shape)
(60, 10) (40, 10)
```

С помощью функции `randint` или `random_integer` можно создать массив целых чисел

```py
np.random.randint(0,3,10)  # array([2, 2, 2, 0, 2, 1, 0, 2, 1, 1])
np.random.randint(0,3,(2,10))
# array([[2, 2, 2, 0, 0, 2, 0, 1, 0, 0],
#        [0, 1, 0, 2, 0, 0, 0, 2, 1, 0]])
```

также можно генерировать числа согласно различным распределениям

```py
np.random.uniform(2,8,(2,10))
# array([[4.99453337, 5.91171405, 6.67511704, 4.99065041, 3.64492597,
#         2.76651705, 5.74189143, 4.14170693, 6.94867685, 3.75262562],
#        [2.16896271, 7.82051192, 3.41823373, 2.03644472, 2.01155376,
#         2.20957972, 2.6459091 , 2.66238016, 4.98455509, 4.74743227]])
```