---
layout: default
title: "Инкапсуляция"
grand_parent: "Геттеры и сеттеры"
parent: "JavaScript"
nav_order: 25
---

# Инкапсуляция

Отделение и сокрытие от внешнего мира внутренностей программы.

## Пример инкапсуляции на функциях

```javascript
'use strict';
function User(name, age) {
    this.name = name;
    let userAge = age;
    this.say = function () {
        console.log(`Имя пользоватлея: ${this.name}, возраст ${userAge}`);
    };
    this.getAge = function () {
        return userAge;
    };
    this.setAge = function (age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Недопустимое значение');
        }
    };
}
const ivan = new User('Ivan', 25);
console.log(ivan.name);
console.log(ivan.getAge());
ivan.setAge(30);
ivan.setAge(300);
console.log(ivan.getAge());
ivan.say();
```

## Пример инкапсуляции на классах

```javascript
class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    say() {
        console.log(`Имя пользоватлея: ${this.name}, возраст ${this._age}`);
    }
    get age() {
        return this._age;
    }
    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
}
const ivan = new User('Ivan', 27);
console.log(ivan.age);
ivan.age = 199;
console.log(ivan.age);
ivan.say();
```