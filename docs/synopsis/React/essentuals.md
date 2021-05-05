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

## Доступ к папке public

Доступ к директории `public` осуществляется при помощи переменных окружения:

Например таким образом мы можем получить доступ к директории `img` внутри директории `public`

```js
<img src={process.env.PUBLIC_URL + '/img/got.jpeg'} alt='error'></img>
```

Если файл (например картинка) хранится в директории модуля, то данное изображение необходимо импортировать:

```js
import img from './error.jpg';
```

## Параметры (property) по умолчанию

Данная конструкция позволит установить значения props по умолчанию.

```js
ComponentName.defaultProps = {
    onItemSelected: () => {}
}
```

## Проверка типа property

[Проверка типов с помощью PropTypes](https://ru.reactjs.org/docs/typechecking-with-proptypes.html)

```js
ComponentName.propTypes = {
    interval: (props, propName, componentName) => {
        const value = props[propName];

        if (typeof value === 'number' && !isNaN(value)) {
            return null
        }

        return new TypeError(`${componentName}: ${propName} должен быть числом`);
    }
}
```

| Название аргумента | Описание                   |
| ------------------ | -------------------------- |
| props              | Список всех property       |
| propName           | Имя определенного property |
| componentName      | Имя компонента             |


## Библиотека prop-types

`npm install prop-types`


```js
import propTypes from 'prop-types'
ComponentName.propTypes = {
    interval: propTypes.number
}
```
Данный метод проерит параметр на соответствие необходимому типу аналогично предыдущему примеру.