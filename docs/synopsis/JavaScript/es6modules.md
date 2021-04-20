---
layout: default
title: "ES6 Modules"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 28
---

# ES6 Modules

## Именованный синтаксис экспорта

```javascript
export let one = 1;
let two = 2;
export {two};
export function sayHi() {
    console.log('Hello');
}
```

Самое главное в таком экспорте чтобы у каждой сущности было свое имя.

Испорт производится следующим образом:

```javascript
import {one as first, two} from './main';
console.log(`${first} и ${two}`);
```

Также импортировать можно сразу все что экспортируется в модуле:

```javascript
import * as data from './main';
```

## Экспорт по умолчанию

В этом случае мы должны указать параметр `default` перед названием функции которую мы экспортируемую

```javascript
export default function sayHi() {
    console.log('Hello');
}
```

В этом случае экспорт выполняется следующим образом:

```javascript
import sayHi from './main';
```

Экспорт по умолчанию может быть только один