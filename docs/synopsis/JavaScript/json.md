---
layout: default
title: "JSON формат передачи данных"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 15
---

# JSON формат передачи данных

## Общая информация

JSON – это набор пар ключ-значение
В качестве значений могут быть объекты, массивы, числа, строки, логические значения или null

```javascript
const person = {
    name: 'Alex',
    tel: '+72332233231'
};
```

Преобразовать javascript объект в формат JSON можно при помощи команды `stringify`

```javascript
console.log(JSON.stringify(person));
```

```
{"name":"Alex","tel":"+72332233231"}
```

Преобразовать JSON в объект javascript можно при помощи команды `parse`

## Глубокое клонирование объектов

Клонирование объектов осуществляется комбинацией методов `parse` и `stringify`.

```javascript
const person = {
    name: 'Alex',
    tel: '+72332233231',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};


const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Ann';
console.log(clone);
```