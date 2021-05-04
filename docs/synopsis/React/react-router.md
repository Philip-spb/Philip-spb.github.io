---
layout: default
title: "Роутинг React Router"
grand_parent: "Конспекты"
parent: "React"
nav_order: 11
---

# Роутинг

[Инструкция по настройке](https://reactrouter.com/web/guides/quick-start)

Роутинг – это инструмент при помощи которого мы скрываем одну часть приложения и показываем другую.
Роутер – компонет котрый по уникальному идентификатору страницы может отображает конкретную часть приложения

## Установка React Router

`npm install react-router-dom --save`

Импортируем зависимости

`import {BrowserRouter as Router, Route} from 'react-router-dom';`

Оборачиваем часть наше приложение. Для того что бы не потерялись стили дополнительно оборачиваем все в `div` с классом `app`

```js
<Router>
    <div className="app">
        <Route path='/component1' component={Component1} />
        <Route path='/component2' component={Component2} />
        <Route path='/component3' component={Component3} />
    </div>
<Router>
```

Импортируем компонент для отображения ссылок

`import {Link} from 'react-router-dom';`

Отображаем ссылки на необходимые страницы

```js
<Link to="/component1">Component1</Link>
<Link to="/component2">Component2</Link>
<Link to="/component3">Component3</Link>
```

Компонент `Link` в отличии тега `a` не перезагружает страницу

Если необходимо добавиь на главную страницу какой-то особенный компонент то необходимо применить парамет `exact`. В противном случае этоткомпоенет появится на всех страницах.

`<Route path="/" exact component={()=><h1>Добро подаловать на сайт GOT DB</h1>} />`

## Динамические пути

```js
<Route path='/books/:id' render={
    ({ match, location, history }) => {
        return <BooksItem />
    }
} />
```

| Аргументы из компонента `Route` |                                                                                                            |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| match                           | Объект с данными о том как именно `path` совпал с текущим адресом (тут же есть передаваемый параметр `id`) |
| location                        | Состояние и положение роутера в текущий момент                                                             |
| history                         | API для организации перехода между страницами                                                              |

## Компонент высшего порядка

`import { withRouter } from 'react-router-dom';`

Благодаря этому модулю мы можем передать компоненту параметры match, location и history.

`export default withRouter(BookPage);`