---
layout: default
title: "Функции-конструкторы"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 10
---

# Функции-конструкторы

*По  классификации типов данных функция является объектом, поэтому в нее можно записать какие-то методы и свойства.*

```javascript
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Привет, ${this.name}`);
    };
}
```

## Модификация функции

```javascript
User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
};
```

После объявления метода `exit` его можно будет использовтаь у всех экземпляров данной функции.

```javascript
const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.hello();
alex.hello();
ivan.exit();
```

*Конструкторы нужны для создания новых однотипных объектов. Например пользователи сайта, товары в магазине и везде где есть шаблонизация. Например слайдеры на странице.*

Все описанное выше являлось стандартом в ES5. В ES6 появились классы.