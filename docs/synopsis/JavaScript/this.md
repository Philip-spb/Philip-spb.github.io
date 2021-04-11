---
layout: default
title: "Контекст вызова. This"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 11
---

# Контекст вызова. This

## Обычная функция

Если обычная функция: this = window, если 'use strict' – undefined:

```javascript
'use strict';
function showThis(){
    console.log(this);
}
showThis();
```

## Объект

Контекст у методов объекта – сам объект

```javascript
const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);
    }
};
obj.sum();
```

## Функции-конструкторы и классы

this в конструкторах и классах – это новый экземпляр объекта

```javascript
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}
let ivan = new User('Ivan', 23);
```

## Передача контекста в функцию

```javascript
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);
```

Функции `call` и `apply` позволяют передать контекст вызова в функцию. Функцию одинаковы, разниуа только в синтаксисе передачи переменных в вызываемую функцию.

```javascript
function count(num) {
    return this * num;
}
const double = count.bind(2);
console.log(double(3));
console.log(double(13));
```

При помощи функции `bind` мы можем создавать новую функцию с привязанным контекстом this

## Контекст вызова в стрелочных функциях

Стрелочные функции не имеют собственного контекста вызова. Их контекстом является контекст родительского объекта.

```javascript
const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this);
        };
        say();
    }
};
obj.sayNumber();
```

```
{ num: 5, sayNumber: [Function: sayNumber] }
```

Если действие в стрелочной функции умещается в одну строчку, то можно применить укороченный вариант записи стрелочной функции.

Такая запись:

```javascript
const double = (a) => {
    return a * 2;
};
```

Будет эквивалентна

```javascript
const double = (a) => a * 2;
```

И если у функции только один аргумент, то она может быть записана без круглых скобок:

```javascript
const double = a => a * 2;
```
