---
layout: default
title: "Общая информация"
grand_parent: "Конспекты"
parent: "Python"
nav_order: 3
---

# Общая информация

## Базовые типы данных

| тип      | описание                     |
| -------- | ---------------------------- |
| int      | целые числа *123*            |
| float    | вещественные числа *123.0*   |
| str      | строки                       |
| bool     | булевы переменные            |
| NoneType | None type                    |
| complex  | комплексные числа *2.0 + 3j* |
| bytes    | байтовая строка              |

## Побитовые операции

```py
x = 10  # в двоичной кодировке 0000_1010
y = 6  # в двоичной кодировке 0000_0110

print("Побитовое ИЛИ:", f'{x | y:09_b}')  # 0000_1110
print("Побитовое И:", f'{x & y:09_b}')  # 000_0010
print("Побитовое исключающее ИЛИ:", f'{y ^ 1:09_b}')  # 0000_1100
print("Побитовый сдвиг влево:", f'{y << 1:09_b}')  # 0000_1100
print("Побитовый сдвиг вправо:", f'{x >> 1:09_b}')  # 0000_0101
print("Инверсия битов:", f'{~x:09_b}')  # -000_1011
```

## Работа со списками

Копирование списков

```py
list1 = [1, 2 ,3]
list2 = list1[:]
list3 = list1.copy()
list4 = list1  # в этом случае мы не копируем список, а только копируем ссылку на список
```

В случае если список содержит вложенные списки, то для копирования необходимо использовать специальную библиотеку copy

```py
import copy
list1 = [1, [2, 3], 4]
list2 = copy.deepcopy(list1)
```

В противном случае при редактировании элемента с индексом 1 мы изменим его во всех списках

## Работа со множествами

Удаление элемента из множества

```py
my_set = {1, 2, 3, 4}
my_set.delete(4)
my_set.delete(4)  # Вызовет ошибку
my_set.discard(4)  # В этом случае ошибка не вызовется, но и удалено ничего не будет
```

Операции над множествами

```py
set1 = {1, 2, 3}
set2 = {2, 3, 4, 5}

new_set1 = set1 | set2  # объединение множеств
new_set2 = set1 & set2  # пересечение множеств
new_set3 = set1 - set2  # разность множеств
new_set4 = set2 - set1  # new_set3 не равно new_set4
new_set5 = set1 ^ set2  # симметрическая разность множеств (new_set3 | new_set4)

set3 = set1.copy()  # копирование множества
```

Для создания неизменяемого множества можно использовать frozenset

```py
my_set = {1, 2, 3}
frozen_set = frozenset(my_set)
```

## Работа со словарями

Создание словаря с ключами из итерабельного объекта

```py
my_list = [1, 2, 3]
my_dict = dict.fromkeys(my_list)
# {1: None, 2: None, 3: None}
```

Преобразование словаря в список

```py
my_dict = {1: 111, 2: 222, 3: 333}

print(my_dict.keys())  # [1, 2, 3]  – список ключей
print(my_dict.values())  # [111, 222, 333]  – список значений
print(my_dict.items())  # [(1, 111), (2, 222), (3, 333)]
```

###  Упорядоченный словарь OrderedDict

```py
from collections import OrderedDict
ordered_dict = OrderedDict.fromkeys('abcde')
print(ordered_dict)

for i, key in enumerate(ordered_dict):
  ordered_dict[key] = i

# Элементы хранятся в том же порядке в котором добавлялись в словарь
print(ordered_dict)

# OrderedDict([('a', None), ('b', None), ('c', None), ('d', None), ('e', None)])
# OrderedDict([('a', 0), ('b', 1), ('c', 2), ('d', 3), ('e', 4)])

ordered_dict.move_to_end('a')  # передвигаем элемент с указанным ключем в конец
print(ordered_dict)

# OrderedDict([('b', 1), ('c', 2), ('d', 3), ('e', 4), ('a', 0)])
```

## Генераторы

Пример реализации генератора чисел Фибоначчи до end не включая

```py
def fibonachi_generator(end):
    f0 = f1 = 1
    while f0 < end:
        yield f0
        f0, f1 = f1, f0+f1

for num in fibonachi_generator(100):
    print(num)
```
