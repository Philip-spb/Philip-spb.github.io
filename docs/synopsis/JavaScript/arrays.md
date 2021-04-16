---
layout: default
title: "Методы перебора массивов"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 19
---

# Методы перебора массивов

## filter

Требуется получить все имена в которых меньше чем 5 символов

```javascript
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function (name) {
    return name.length < 5; // Сокращенный вариант записи if (name.length < 5) {return name.length;}
});
```
## map

Данный метод позволяет взять исходный массив и изменить каждый его элемент

```javascript
const answers = ['IvAn', 'AnnA', 'Hello'];
const result = answers.map(item => item.toLowerCase());
```

## some

Данный метод перебирает весь массив и возвращает `true` если хоть один элемент будет соответствовать заданному условию

Проверяем есть ли хоть одно число в массиве

```javascript
const some = [4, 'qwq', 'asdasdawq'];
console.log(some.some(item => typeof(item) === 'number'));
```

## every

Данный метод перебирает весь массив и возвращает `true` если все элементы соответствуют заданному условию


## reduce

Данный метод необходим для того чтобы собрать все элементы массива в одно единое 

Первым параметром задается функция, вторым параметром (опционально) задается начальное значение

Суммируем все элементы

```javascript
const arr = [4, 5, 1, 3, 2, 6];
const res = arr.reduce((sum, current) => sum + current);
```

