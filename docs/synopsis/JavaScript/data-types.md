---
layout: default
title: "Базовая информация"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 1
---

<details close markdown="block">
  <summary>
    Предметный указатель
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

# Базовая информация
## Условия

```javascript
'use strict';

if (4 == 9){
    console.log('Ok!');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too much');
} else {
    console.log('Ok!');
}
```

### Тернарные операторы

```javascript
(num === 50) ? console.log('Ok!') : console.log('Error');
```

### Switch

```javascript
switch (num) {
    case 49:
        console.log('Not right');
        break;
    case 100:
        console.log('Not right');
        break;
    case 50:
        console.log('OK!');
        break;
    default:
        console.log('Not now');
        break;
}
```

## Циклы

```javascript
'use strict';

let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 60);

for (let i = 1; i < 8; i++) {
    console.log(i);
}

for (let i = 1; i < 20; i++) {
    if (i == 6 ){
        // break; // Прерывание цикла 
        continue; // Пропуск шага в цикле
    }
    console.log(i);
}
```

## Функции

```javascript
'use strict';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage('Hello, JS!');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(10,12));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    // Данную функццию можно использовать только после её объявления
    console.log('Hello, function expression!');
};

logger();

// Можно записывать без фигурных скобок
// const newCalc = (a,b) => a + b;

const newCalc = (a,b) => { 
    return a + b; 
};

console.log(newCalc(2,3));
```

## Методы

### Работа со строками

```javascript
'use strict';

console.dir(Number);  // Посмотреть все методы объекта Number

const str = "test";

console.log(str.toUpperCase());
console.log(str[2]);

const fruit = "Some fruit";

console.log(fruit.indexOf('fruit'));  // Получим 5

const logg = "Hello, World";

const startWorld = logg.indexOf('World');
const lenLogg = logg.length;

console.log(logg.slice(startWorld, lenLogg));  // Отрицательные значения отсчитываются с конца строки

console.log(logg.substr(startWorld, 2));  // Вторым аргументом указываем сколько символов нам необходимо вырезать
```

### Работа с числами

Для работы с числами используется стандартная бибблиотека  Math

```javascript
const num = 2.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));  // Можно также использовать parseFloat
```

## Callback функции

```javascript
'use strict';

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);
```

## Объекты, деструктуризация объектов из ES6

```javascript
'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){                   // Создаем метод в объекте
        console.log('Test');
    }
};

// Деструктуризация
const {border, bg} = options.colors;
console.log(border);

console.log(Object.keys(options).length);   // !!! Считаем количество элементов в объекте

options.makeTest();


// console.log(options.name);

// delete options.name;                     // удаляем элемент

// console.log(options.name);

// Перебираем все свойства объекта

let counter = 0;
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }

}

console.log(counter);
```