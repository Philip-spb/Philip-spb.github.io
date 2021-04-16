---
layout: default
title: "Fetch API"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 18
---

# Fetch API

Современная земена Ajax запросов

Fetch API основан на promise

Пример GET запроса

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
```

Пример POST запроса

```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({name: 'Alex'}),
    headers: {
        'Content-type': 'application/json'
    }
})
    .then((response) => response.json())
    .then((json) => console.log(json));
```