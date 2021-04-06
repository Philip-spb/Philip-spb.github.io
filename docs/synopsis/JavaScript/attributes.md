---
layout: default
title: "Атрибуты загрузки скриптов"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 2
---

# Атрибуты загрузки скриптов

## Defer

Атрибут defer сообщает браузеру что он должен продолжать обрабатывать страницу и загружать скрипт в фоновом режиме. Скрипты с атрибутом defer всегда выполняются когда наше DOM дерево уже готово.

```html
<script defer src="js/test.js"></script>
```

## Async

Скрипты с атрибутом async при загрузке не ждут друг друга

Кроме того, данный атрибут можно назначать созданному элементу script при динамическом его создании

```javascript
function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript("js/test.js")
loadScript("js/some.js")
```