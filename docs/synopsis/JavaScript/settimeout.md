---
layout: default
title: "Скрипты и время их выполнения"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 6
---

# Скрипты и время их выполнения

## setTimeout

- В начале **setTimeout** принимает функцию которая должна запуститься через определенное время;
- Вторым аргументом указывается время в миллисекундах через которое функция должна выполниться;
- Третьим аргументом мы передаем аргумент для выполняемой функции. Аргументов может быть бесконечное количество.

```javascript
const timerId = setTimeout(function(text) {
    console.log(text);
}, 2000, 'Hello');
```

Когда мы передаем **setTimeout** или **setInterval** в переменную, мы записываем числовой идентификатор этого таймера. В последствии при помощи этого идентификаторы мы можем останавливать таймер.

```javascript
clearInterval(timerId);
```

## setInterval

Данная функция выполняет заданную функцию через определенный промежуток времени. Абсолютно все параметры идентичны с **setTimeout**


## Чем рекурсивный setTimeout лучше чем setInterval?

**setInterval** не учитывает время, потраченное на выполнение функции, поэтому следующее событие может начать выполняться раньше завершения предыдущего.

```javascript
let id = setTimeout(function log() { 
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500);
```