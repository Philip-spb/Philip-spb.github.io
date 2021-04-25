---
layout: default
title: "Основная информация по React"
grand_parent: "Конспекты"
parent: "React"
nav_order: 6
---

# Основная информация по React

## Структура проекта

Работам в папке `src`. Создаем в ней папку `components`, в ней буду хранниться папки всех компонентов.

Компонент `app` – главный компонент содержащий в себе большую часть структоуры приложения.

Остальные компоненты могут носить произвольные имена. 

Внутри папок компонентов желательно поддерживать следующую структуру:

`название-компонента.js`

```js
import React from 'react';
import './post-status-filter.css';
const PostSatusFilter = () => {
    return (
        <div>
            ...
        </div>
    )
};
export default PostSatusFilter;
```

`index.js`

```js
import PostSatusFilter from './post-status-filter';
export default PostSatusFilter;
```

`название-компонента.css`

Данная структура поможет в дальнейшем сократить количество лишнего кода.

