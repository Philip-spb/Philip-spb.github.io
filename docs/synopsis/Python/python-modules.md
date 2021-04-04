---
layout: default
title: "Модули Python"
grand_parent: "Конспекты"
parent: "Python"
nav_order: 1
---

# Модули Python
{: .no_toc }

## Указатель
{: .no_toc .text-delta }

1. TOC
{:toc}

---
# Модуль collections

## collections.Counter

`collections.Counter` – вид словаря, который позволяет нам считать количество неизменяемых объектов (в большинстве случаев, строк). 

```py
>>> import collections
>>> c = collections.Counter()
>>> for word in ['spam', 'egg', 'spam', 'counter', 'counter', 'counter']:
...     c[word] += 1
...
>>> print(c)
Counter({'counter': 3, 'spam': 2, 'egg': 1})
>>> print(c['counter'])
3
>>> print(c['collections'])
0
```

Но возможности Counter на этом не заканчиваются. У него есть несколько специальных методов:

`elements()` – возвращает список элементов в лексикографическом порядке.

```py
>>> c = Counter(a=4, b=2, c=0, d=-2)
>>> list(c.elements())
['a', 'a', 'a', 'a', 'b', 'b']
```

`most_common([n])` – возвращает n наиболее часто встречающихся элементов, в порядке убывания встречаемости. Если n не указано, возвращаются все элементы.

```py
>>> Counter('abracadabra').most_common(3)
[('a', 5), ('r', 2), ('b', 2)]
```

`subtract([iterable-or-mapping])` – вычитание

```py
>>> c = Counter(a=4, b=2, c=0, d=-2)
>>> d = Counter(a=1, b=2, c=3, d=4)
>>> c.subtract(d)
Counter({'a': 3, 'b': 0, 'c': -3, 'd': -6})
```

**Наиболее часто употребляемые шаблоны для работы с Counter:**

`sum(c.values())` – общее количество.
`c.clear()` – очистить счётчик.
`list(c)` – список уникальных элементов.
`set(c)` – преобразовать в множество.
`dict(c)` – преобразовать в словарь.
`c.most_common()[:-n:-1]` – n наименее часто встречающихся элементов.
`c += Counter()` – удалить элементы, встречающиеся менее одного раза.

Counter также поддерживает сложение, вычитание, пересечение и объединение:

```py
>>> c = Counter(a=3, b=1)
>>> d = Counter(a=1, b=2)
>>> c + d
Counter({'a': 4, 'b': 3})
>>> c - d
Counter({'a': 2})
>>> c & d
Counter({'a': 1, 'b': 1})
>>> c | d
Counter({'a': 3, 'b': 2})
```

## collections.deque

*Deque - Переводится как 'Двусторонняя очередь'*

`collections.deque(iterable, [maxlen])` – создаёт очередь из итерируемого объекта с максимальной длиной maxlen. Очереди очень похожи на списки, за исключением того, что добавлять и удалять элементы можно либо справа, либо слева.

**Методы, определённые в deque:**

`append(x)` – добавляет x в конец.
`appendleft(x)` – добавляет x в начало.
`clear()` – очищает очередь.
`count(x)` – количество элементов, равных x.
`extend(iterable)` – добавляет в конец все элементы iterable.
`extendleft(iterable)` – добавляет в начало все элементы iterable (начиная с последнего элемента iterable).
`pop()` – удаляет и возвращает последний элемент очереди.
`popleft()` – удаляет и возвращает первый элемент очереди.
`remove(value)` – удаляет первое вхождение value.
`reverse()` – разворачивает очередь.
`rotate(n)` – последовательно переносит n элементов из начала в конец (если n отрицательно, то с конца в начало).

## collections.defaultdict

`collections.defaultdict` ничем не отличается от обычного словаря за исключением того, что по умолчанию всегда вызывается функция, возвращающая значение:
```py
>>> import collections
>>> defdict = collections.defaultdict(list)
>>> print(defdict)
defaultdict(<class 'list'>, {})
>>> for i in range(5):
...     defdict[i].append(i)
...
>>> print(defdict)
defaultdict(<class 'list'>, {0: [0], 1: [1], 2: [2], 3: [3], 4: [4]})
```

## collections.OrderedDict
`collections.OrderedDict` – ещё один похожий на словарь объект, но он помнит порядок, в котором ему были даны ключи. 

**Методы:*

`popitem(last=True)` – удаляет последний элемент если last=True, и первый, если last=False.

`move_to_end(key, last=True)` – добавляет ключ в конец если last=True, и в начало, если last=False.

```py
>>> d = {'banana': 3, 'apple':4, 'pear': 1, 'orange': 2}
>>> OrderedDict(sorted(d.items(), key=lambda t: t[0]))
OrderedDict([('apple', 4), ('banana', 3), ('orange', 2), ('pear', 1)])
>>> OrderedDict(sorted(d.items(), key=lambda t: t[1]))
OrderedDict([('pear', 1), ('orange', 2), ('banana', 3), ('apple', 4)])
>>> OrderedDict(sorted(d.items(), key=lambda t: len(t[0])))
OrderedDict([('pear', 1), ('apple', 4), ('orange', 2), ('banana', 3)])
```

## collections.namedtuple()

Класс `collections.namedtuple` позволяет создать тип данных, ведущий себя как кортеж, с тем дополнением, что каждому элементу присваивается имя, по которому можно в дальнейшем получать доступ:

```py
>>> Point = namedtuple('Point', ['x', 'y'])
>>> p = Point(x=1, y=2)
>>> p
Point(x=1, y=2)
>>> p.x
1
>>> p[0]
1
```

# Функциональное программирование в Python

## Lambda выражение в Python

Синтаксис lambda выражения в Python
```py
lambda arguments: expression
```

## Функция map()

В Python функция `map` принимает два аргумента: функцию и аргумент составного типа данных, например, список. map применяет к каждому элементу списка переданную функцию.

Для примера преобразуем список из строк в список из чисел.

```py
>>> old_list = ['1', '2', '3', '4', '5', '6', '7']
>>> new_list = list(map(int, old_list))
>>> print (new_list)
[1, 2, 3, 4, 5, 6, 7]
```

Функция `map` может быть так же применена для нескольких списков, в таком случае функция-аргумент должна принимать количество аргументов, соответствующее количеству списков:

```py
>>> a1 = [1,2,3]
>>> a2 = [4,5,6]
>>> new_list = list(map(lambda x,y: x + y, a1, a2))
>>> print (new_list)
[5, 7, 9]
```

## Функция filter()

Функция `filter` предлагает элегантный вариант фильтрации элементов последовательности. Принимает в качестве аргументов функцию и последовательность, которую необходимо отфильтровать:

```py
>>> mixed = ['мак', 'просо', 'мак', 'мак', 'просо', 'мак', 'просо', 'просо', 'просо', 'мак']
>>> zolushka = list(filter(lambda x: x == 'мак', mixed))
>>> print (zolushka)
['мак', 'мак', 'мак', 'мак', 'мак']
```

## Функция reduce()

Функция `reduce` принимает 2 аргумента: функцию и последовательность. reduce() последовательно применяет функцию-аргумент к элементам списка, возвращает единичное значение.

Вычисление суммы всех элементов списка при помощи reduce:

```py
>>> from functools import reduce
>>> items = [1,2,3,4,5]
>>> reduce(lambda x,y: x + y, items)
15
```

Вычисление наибольшего элемента в списке при помощи reduce:

```py
>>> from functools import reduce
>>> items = [1, 24, 17, 14, 9, 32, 2]
>>> reduce(lambda a,b: a if (a > b) else b, items)
32
```

## Функция zip()

Функция `zip` объединяет в кортежи элементы из последовательностей переданных в качестве аргументов.

```py
>>> a = [1,2,3]
>>> b = "xyz"
>>> c = (None, True)
>>> list(zip(a, b, c))
[(1, 'x', None), (2, 'y', True)]
```

Zip прекращает выполнение, как только достигнут конец самого короткого списка


# Модуль itertools

Модуль itertools - сборник полезных итераторов.
`itertools.count(start=0, step=1)` - бесконечная арифметическая прогрессия с первым членом start и шагом step.
`itertools.cycle(iterable)` - возвращает по одному значению из последовательности, повторенной бесконечное число раз.
`
itertools.repeat(elem, n=Inf)` - повторяет elem n раз.
`itertools.accumulate(iterable)` - аккумулирует суммы.
```py
>>> list(accumulate([1,2,3,4,5]))
[1, 3, 6, 10, 15]
```
`itertools.chain(*iterables)` - возвращает по одному элементу из первого итератора, потом из второго, до тех пор, пока итераторы не кончатся.
`itertools.combinations(iterable, [r])` - комбинации длиной r из iterable без повторяющихся элементов.
```py
>>> list(combinations('ABCD', 2))
AB AC AD BC BD CD
```
`itertools.combinations_with_replacement(iterable, r)` - комбинации длиной r из iterable с повторяющимися элементами.
```py
>>> list(combinations_with_replacement('ABCD', 2))
AA AB AC AD BB BC BD CC CD DD
```
`itertools.compress(data, selectors)` - (d[0] if s[0]), (d[1] if s[1]), ...
```py
>>> list(compress('ABCDEF', [1,0,1,0,1,1]))
A C E F
```
`itertools.dropwhile(func, iterable)` - элементы iterable, начиная с первого, для которого func вернула ложь.
```py
>>> list(dropwhile(lambda x: x < 5, [1,4,6,4,1]))
6 4 1
```
`itertools.takewhile(func, iterable)` - элементы до тех пор, пока func возвращает истину.
```py
>>> list(takewhile(lambda x: x<5, [1,4,6,4,1]))
1 4
```
`itertools.filterfalse(func, iterable)` - все элементы, для которых func возвращает ложь.
`itertools.groupby(iterable, key=None)` - группирует элементы по значению. Значение получается применением функции key к элементу (если аргумент key не указан, то значением является сам элемент).
```py
>>> from itertools import groupby
>>> things = [("animal", "bear"), ("animal", "duck"), ("plant", "cactus"),
...           ("vehicle", "speed boat"), ("vehicle", "school bus")]
>>> for key, group in groupby(things, lambda x: x[0]):
...     for thing in group:
...         print("A %s is a %s." % (thing[1], key))
...     print()
A bear is a animal.
A duck is a animal.

A cactus is a plant.

A speed boat is a vehicle.
A school bus is a vehicle.
```
`itertools.islice(iterable[, start], stop[, step])` - итератор, состоящий из среза.
`itertools.permutations(iterable, r=None)` - перестановки длиной r из iterable.
`itertools.product(*iterables, repeat=1)` - аналог вложенных циклов.
```py
>>> list(product('ABCD', 'xy'))
Ax Ay Bx By Cx Cy Dx Dy
```
`itertools.starmap(function, iterable)` - применяет функцию к каждому элементу последовательности (каждый элемент распаковывается).
```py
>>> list(starmap(pow, [(2,5), (3,2), (10,3)]))
32 9 1000
```
`itertools.tee(iterable, n=2)` - кортеж из n итераторов.
`itertools.zip_longest(*iterables, fillvalue=None)` - как встроенная функция zip, но берет самый длинный итератор, а более короткие дополняет fillvalue.
```py
>>> list(zip_longest('ABCD', 'xy', fillvalue='-'))
Ax By C- D-
```