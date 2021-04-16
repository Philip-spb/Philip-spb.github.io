---
layout: default
title: "Async/Await (US8)"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 21
---

# Async/Await

С помощью оператора `async` мы "говорим что внутри функции будет асинхронный код". Перед теми операциями выполнение которых нам необходимо дождаться мы ставим оператор `await`. Эти операторы всегда используются в паре.

```javascript
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'multipart/form-data'
        },
        body: data
    });

    return await res.json();
};
```

Данные операторы необходимо использовать всегда когда есть таймауты или работа с сервером.