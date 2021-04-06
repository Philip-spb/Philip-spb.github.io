---
layout: default
title: "Делегирование событий"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 5
---

# Делегирование событий

Суть делигирования заключается в том что мы берем элемент который является родителем для всех элементов которым мы что-то делигируем и работаем непосредственно сним. Мы назначаем функцию для его потомков которые подходят под определенные параметры.

```html
<div id="first" class="btn-block">
    <button class="blue some"></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
</div>
```

```javascript
const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('blue')){
        console.log('Hello!');
    }
});
```
Также соответствие можно определять таким способом:

```javascript
wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.matches("button.red")) {
        console.log('Hello!');
    }
});
```

Это более продвинутый способ