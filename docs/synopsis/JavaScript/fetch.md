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

## GET запрос

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
```

## POST запроса

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

##  Методы ok и status

При помощи метода `ok` можно определить что мы получили неверный ответ от сервера. При помощи `status` можно узнать точный статус ответа от сервера

```javascript
const res = await fetch(url);
if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
}
```

`throw` позволяет вывести в консоли информацию