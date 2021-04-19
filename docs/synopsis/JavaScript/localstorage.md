---
layout: default
title: "Работа с localStorage"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 19
---

# Работа с localStorage

Данная технология позволяет сохранять данные на сайте без работы с сервером и БД. В данный объект помещается около 5 Мегабайт информации.

| Команда                             | Описание                                                                          |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| `localStorage.setItem('number', 5)` | Устанавливаем значение. Первый атрибут это название переменной, второй – значение |
| `localStorage.getItem('number')`    | Получение значения                                                                |
| `localStorage.removeItem('number')` | Удаление элемента                                                                 |
| `localStorage.clear()`              | Полностью очищаем хранилище                                                       |

Для того чтобы поместить объект в localStorage его необходимо сначала сеарелизовать

```javascript
const persone = {
    name: 'Alex',
    age: 25
};
const serializedPerson = JSON.stringify(persone);
localStorage.setItem('alex', serializedPerson);
```