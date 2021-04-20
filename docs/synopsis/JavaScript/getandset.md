---
layout: default
title: "Регулярные выражения"
grand_parent: "Геттеры и сеттеры"
parent: "JavaScript"
nav_order: 24
---

# Геттеры и сеттеры

**Свойства объектов делятся на две категории:**
- Свойства данные
- Свойства аксессоры (геттеры и сеттеры)

```javascript
const persone = {
    name: "Alex",
    age: 25,
    get userAge() {
        return this.age;
    },
    set userAge(num) {
        this.age = num;
    }
};
console.log(persone.userAge);
console.log(persone.userAge = 30);
```
