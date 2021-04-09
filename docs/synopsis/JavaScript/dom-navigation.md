---
layout: default
title: "Навигация по DOM дереву"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 8
---

# Навигация по DOM дереву

`document.documentElement` – Получаем полный HTML код страницы

```javascript
console.log(document.body);
console.log(document.documentElement);
```

`childNodes` – получаем всех потомков (все ноды) родительского элемента body

```javascript
console.log(document.body.childNodes);
```


`firstChild` и `lastChild` – Получем первого и последнего потомка родительского элемента

```javascript
console.log(document.body.firstChild);
console.log(document.body.lastChild);
```


`parentNode` – Получаем родительский элемент

```javascript
console.log(document.querySelector('#current').parentElement);
```

**Чтобы не получать пустые строки необходимо использовать функции `previousElementSibling`, `parentElemen` и тп.**

```javascript
console.log(document.querySelector('[data-current="3"]').previousElementSibling);
```

## Переберем всех потомков body за исключением пустых строк `#text`

```javascript
for (let node of document.body.childNodes){
    if (node.nodeName == '#text'){
        continue;
    }
    console.log(node);
}
```