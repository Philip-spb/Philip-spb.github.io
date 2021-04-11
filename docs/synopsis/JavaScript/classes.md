---
layout: default
title: "Классы (ES6)"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 11
---

**Классы** – это красивая обертка функций конструкторов

```javascript
'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10,10);
const long = new Rectangle(20,100);

console.log(square.calcArea());
console.log(long.calcArea());
```

## Наследование

Наследование классов производится при помощи `extends`. Для передачи свойств родительского класса в наследуемый можно использовать метод `super()`. `super()` всегда должна быть на первом месте в конструкторе. В качестве параметров мы должны использовать имена переменных которые мы хотим наследовать `super(height, width);`.

```javascript
class ColoredRectagleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}
const div = new ColoredRectagleWithText(25, 10, 'Hello, World!', 'red');
div.showMyProps();
console.log(div.calcArea());
```

```
Текст: Hello, World!, цвет: red
250
```