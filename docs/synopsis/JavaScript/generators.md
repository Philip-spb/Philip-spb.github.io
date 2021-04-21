---
layout: default
title: "Функции-генераторы"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 32
---

# Функции-генераторы

Функции-генераторы выдают результат последовательно

```javascript
function* generator() { 
    yield 'S';
    yield 'c';
    yield 'r';
    yield 'i';
    yield 'p';
    yield 't';
}
console.log(str.next());
```

```
{ value: 'S', done: false }
```
`done` – достигли мы конца или нет

Функцию-генератор можно перебрать с помощью перебирвющей конструкции `for of`

```javascript
function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}
for (let k of count(7)) {
    console.log(k);
}
```

```
0
1
2
3
4
5
6
```