---
layout: default
title: "JS анимации, requestAnimationFrame"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 33
---

# JS анимации

**Существует 2 вида анимаций**

- ВременнАя анимация
- При помощи функциии requestAnimationFrame

*requestAnimationFrame* позволяет запускать функции в качестве анимации. Данная функция берет анимацию и подстраивает под частоту обновления браузера. При этом нагрузка на браузер очень сильно снижается.

[создание сложных анимаций](https://learn.javascript.ru/js-animation#funktsii-raschyota-vremeni)

```javascript
function myAnimation() {
    pos+=30;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }
}
btn.addEventListener('click', () => requestAnimationFrame(myAnimation));
```

Отмена анимации производится при помощи функции `cancelAnimationFrame`

```javascript
let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);
```