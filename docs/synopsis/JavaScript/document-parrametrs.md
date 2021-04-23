---
layout: default
title: "Параметры документа, окна и работа с ними"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 9
---

# Параметры документа, окна и работа с ними

Существует 3 объекта для управления содержимым окна:

```javascript
console.dir(document)
console.dir(window)
console.dir(screen)
```

![Стандартные свойства объектов](/assets/images/metric-all.png){: .open-modal}

`scrollTop` – Определяем сколько пикселей мы уже "пролистали"


## Узнаем, отображен ли уже элемент на странице или нет

```javascript
const box = document.querySelector('.box');
const btn = document.querySelector('button');
const style = window.getComputedStyle(box);
console.log(style.display);
```

## Получаем количество пикселей которое пользоваталь уже проистал на странице
```javascript
console.log(document.documentElement.scrollTop);
// scrollTop мы можем присваевать и тем самым перемещать видимую область 
document.documentElement.scrollTop = 50;
```

## Относительный скрол

```javascript
// Скролим на 400 пикселей вниз относительно текущего положения
window.scrollBy(0, 400);

// Скролим на 400 пикселей вниз относительно начала страницы
window.scrollTo(0, 400);
```

## Плавный скрол вверх

```javascript
const moveUpInterval = setInterval(() => {
    document.documentElement.scrollTop -= 150;
    if (document.documentElement.scrollTop <= 0) {
        clearInterval(moveUpInterval);
    }
}, 4);
```