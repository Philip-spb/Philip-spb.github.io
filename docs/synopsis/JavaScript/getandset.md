---
layout: default
title: "Геттеры и сеттеры"
grand_parent: "Конспекты"
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
