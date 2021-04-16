---
layout: default
title: "Promise (ES6)"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 17
---

# Promise

При помощими Promice мы говорим что если произошло что-то, то у нас выполнится следующее действие.

**Порядок действий**

- Мы создаем обещание которое помещаем во внутрь переменной. Мы предполагаем что обещание может завршиться как положиьеьно так и отрицательно, но в данный момент мы не занаем как оно завершится.
- Внутри объекта Promice есть два аргумента: `resolve` и `reject`. Это аргументы вместо которых будут подставляться функции. Если все хорошо (например сервер ответил) мы вызываем функцию `resolve`, если что-то не так – `reject`
- Для обработки положительных результатов есть метод `then`

## Пример `resolve`

```javascript
'use strict';

console.log('Запрос данных');

const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'ordered';
            resolve(product);
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
});
```

## Пример `reject`

```javascript
'use strict';

console.log('Запрос данных');

const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'ordered';
            reject());
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
});
```

## Finally

Также возможно указать код который будет выполняться в конце последовательности действий при любых обстоятельствах

```javascript
().finally(() => {
    console.log('finally');
});
```

## Метод Promise.all()

Метод `all` необходим для того чтобы проверить выполнение всех условий

```javascript
const test = (time) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

Promise.all([test(1000), test(2000)]).then(()=>{
    console.log('Test');
});
```

## Метод Promise.race()

Метод `race` запускает функцию как только выполняется хотя бы одно условие

```javascript
Promise.race([test(1000), test(2000)]).then(()=>{
    console.log('Test');
});
```
