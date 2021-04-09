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

## Массивы и псевдомассивы

```javascript
'use strict';

// const arr = [1, 2, 3, 6, 8];

// // arr.pop();                          // Удаляем последний элемент из массива
// arr.push(10);                          // Добавляем элемент в конец масиива

// // console.log(arr);

// for (let n in arr) {
//     console.log(arr[n]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function (item, id, arr) {   // Перебираем все элементы массива
//     console.log(`${id}: ${item} внутри масиива ${arr}`);
// });


// Разбиваем строку на массив
const str = prompt("", "");
const products = str.split(", ");
console.log(products);

// Сортировка массива (всегда сортирует как строки, 
// но мы можем указать callback функцию которая укажет как правильно сортировать)
products.sort();

// Объединяем массив в строку
console.log(products.join('; '));


const numberArr = [2, 13, 26, 8, 10];
numberArr.sort(compareNum);
console.log(numberArr);

function compareNum(a, b) {
    return a - b;
}
```

## Передача по ссылке или по значению

```javascript
'use strict';

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj;  // Ссылка

copy.a = 10;

console.log(copy);
console.log(obj);

function copyFunc(mainObj){
    let objCopy = {};

    let key;
    for(key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyFunc(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));  // Соединение двух объектов
const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();  // Копировани массива

newArray['1'] = 'asdasdasdasdad';

console.log(oldArray);
console.log(newArray);

const   video = ['youtube', 'vimeo', 'rutube'],
        blogs = ['wordpress', 'livejournal', 'blogger'],
        internet = [...video, ...blogs, 'vk', 'facebook'];  // Spread – оператор разворота

console.log(internet);

function log(a, b ,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

// const newObj = {...q};

// log(newObj);
```

## ООП

С примером наследования

```javascript
'use strict';

let str = 'some';
let strObj = new String(str);

console.log(typeof (str));
console.log(typeof (strObj));


console.dir([1, 2, 3]);

const solder = {
    helth: 400,
    armor: 100,
    sayHello: function(){
        console.log('Hello');
    }
};

const john = {
    helth: 100
};

// Устаревший формат

// john.__proto__ = solder;

// john.sayHello();


// Актуальный формат

Object.setPrototypeOf(john, solder);

john.sayHello();

const smith = Object.create(solder);

smith.sayHello();
```

## Динамическая типизация

Примеры преобразования типов

 ```javascript
'use strict';

// To String

// 1)
// Таким способом редко пользуются

console.log(typeof (String(null)));
console.log(typeof (String(4)));

// 2)
// Конкатинация

console.log(typeof (5 + ''));

const num = 5;

console.log("https//vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number

// 1)
console.log(typeof (Number('4')));

// 2)
// Унарный оператор +

console.log(typeof (+'5'));

// 3)
console.log(typeof (Number(parseInt("15px", 10))));

let answ = +prompt("Hello", "");

// To boolean

// Всегда будет False: 0, '', null, underfined, NaN
// Все остальное True

// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof (Boolean('4')));

// 3)
console.log(typeof (!!"234567"));
```

## Выполнение функций при выполнении действия

```javascript
window.addEventListener('scroll', showModalByScroll);
window.removeEventListener('scroll', showModalByScroll);
```

В данном случае функция вызывается без скобок

Также выполнить действие можно таким образом:

```javascript
window.addEventListener('scroll', (event) => {
    console.log(event.target);
});
```