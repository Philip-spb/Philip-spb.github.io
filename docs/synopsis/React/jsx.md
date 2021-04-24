---
layout: default
title: "Препроцессор JSX"
grand_parent: "Конспекты"
parent: "React"
nav_order: 5
---

# Препроцессор JSX

Конструкция:

```js
const elem = <h2>Hello, World!</h2>
ReactDOM.render(elem, document.getElementById('root'));
```

идентичная следующей:

```js
const elem = React.createElement('h2', null, 'Hello, World!!!');
ReactDOM.render(elem, document.getElementById('root'));
```

Данное преобразование осуществляется при помощи Babel

**Если элемент имеет многострочную структуру, его необходимо обернуть в круглые скобки**

Также все теги в одном элементе обязетельно нужно во что-то обернуть (например *div*)

```js
const elem = (
    <div>
        <h2>Hello, World!</h2>
        <input type="text" placeholder="Type here" />
        <button/>
    </div>
)
```

## Создание компонентов

Компоненты – это функции. Их название обязательно должно быть с большой буквы

```js
const Header = () => {
    return <h2>Hello, World!</h2>
}
const Field = () => {
    return <input type="text" placeholder="Type here" />
}
const Button = () => {
    return <button />
}
```

Вызываются компоненты при помощи конструкцтт *<имяКомпонента />*

```js
const App = () => {
    return (
        <div>
            <Header />
            <Field />
            <Button />
        </div>
    )
}
```

## Использование переменных в компонентах

Чтобы использовать переменную в компоненте её необходемо вызвать следующим образом {имяПеременной}

```js
const Button = () => {
    const text = "Log in";
    const logged = false;
    return <button>{logged ? "Enter" : text}</button>
}
```

Но мы не можем внутри React элементов помещать объекты