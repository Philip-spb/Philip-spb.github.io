---
layout: default
title: "AJAX"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 16
---

# AJAX

## Встроенный объект в браузера `XMLHttpRequest`

```javascript
const request = new XMLHttpRequest();
```

Первым методом вызывается `open` который собирает необходимые для запроса настройки.

```javascript
request.open(method, url, async, login, pass);
```

- Первый параметром задается метод (GET, POST и т.п.)
- Вторым аргументом задается путь к серверу
- Третьим параметром мы определяем асинхронность (true или false)
- Последними двумя аргументами указываются логин и пароль

Затем указывается заголовок

```javascript
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
```

И отправляем запрос

```javascript
request.send();
```

В качестве параметров `send` можно указать какие-то данные которые будут отпрвляться на сервер (например при POS запросе)

**В качестве ответа от сервера мы получаем:**
- status: статус (404, 200 и т.п.)
- statusText: текстовое описание ответа от сервера
- response: ответ от сервера
- readyState: [текущее состояние нашего запроса](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState)

Вариант с `readystatechange`:

```javascript
request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.response);
        inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); // Округляем до двух цифр после запятой
    } else {
        inputUsd.value = "Что-то пошло не так";
    }
});
```

Вариант с `load`:
Данное событие срабатывает только один раз когда запрос уже полностью готов

```javascript
request.addEventListener('load', () => {
    if (request.status === 200) {
        const data = JSON.parse(request.response);
        inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    } else {
        inputUsd.value = "Что-то пошло не так";
    }
});
```