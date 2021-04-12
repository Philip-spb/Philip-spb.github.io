---
layout: default
title: "Получение элементов на странице и работа с ними"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 13
---

# Получение элементов на странице и работа с ними

## Устаревшие способы получения элементов со страницы

Получаем элемент по ID

```javascript
const box = document.getElementById('box');
```

Получаем все элементы button (получаем псевдо массив)

```javascript
const btns = document.getElementsByTagName('button');
```

Получаем все элементы по классам

```javascript
const circles = document.getElementsByClassName('circle');
```

## Актуальные способы получение элементов со страницы

Получение элементов по CSS селлектору

```javascript
const hearts = document.querySelectorAll('.heart');
// hearts.forEach(item => {
//     console.log(item);
// });
```

Получение первого элемента по селлектору на странице

```javascript
const oneHeart = document.querySelector('.heart');
```

Так можно перебрать все элементы, но так не делают

```javascript
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}
```

```javascript
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});
```

## Создаем элемент на странице

```javascript
const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');
```

Добавляем стили

```javascript
box.style.backgroundColor = 'blue';
box.style.width = '500px';
box.style.cssText = 'background-color: blue; width: 500px';
btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';
```

Добавляем класс

```javascript
div.classList.add('black');
```

Добавляем элемент в конец страницы

```javascript
document.body.append(div);
```

Добавляем элемент в конец блока wrapper (родителя)

```javascript
wraper.append(div);
// wraper.appendChild(div); // Это устаревший метод
```

Добавляем элемент в начало блока wrapper (родителя)

```javascript
wraper.prepend(div);
```

Добавляем элемент перед заданным элементом

```javascript
hearts[1].before(div);
```

Добавляем элемент после заданного элемента

```javascript
hearts[1].after(div);
```

Устаревший метод

```javascript
wraper.insertBefore(div, hearts[1]);  // Первым параметром мы указываем какой элемент вставляем, вторым – перед каким элементом мы его вставляем.
```

Удаление элемента со страницы

```javascript
circles[0].remove();
// Устаревший метод удаления элемента
// wraper.removeChild(hearts[1]);
```

Заменяем один элемент на странице другим элементом со страницы

```javascript
hearts[0].replaceWith(circles[1]);
// Устаревший метод замены элемента
// wraper.replaceChild(circles[1], hearts[0]); // Первым аргументом указываем тот элемент на который меняем, вторым – тот каокторый меняем
```

Добавляем наполнение для созданного элемента

```javascript
div.innerHTML = "<h1>Hello, World!</h1>";  // Подходит для вставки HTML

// div.textContent = "<h1>Hello</h1>"; // Подходиьт для вставки только текста (не HTML)

div.insertAdjacentHTML('afterend', '<h2>Hello2</h2>'); //Первый аргумент – это специальное слово, второй – текст который мы хотим вставить
```

Параметры для метода `insertAdjacentHTML`

| Параметр    | Описание                 |
| ----------- | ------------------------ |
| afterbegin  | после начала             |
| afterend    | после окончания          |
| beforebegin | перед началом            |
| beforeend   | после окончания элемента |