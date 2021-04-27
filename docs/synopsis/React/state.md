---
layout: default
title: "Свойства и состояния компонентов"
grand_parent: "Конспекты"
parent: "React"
nav_order: 7
---

# Свойства и состояния компонентов

## Свойства

Свойства в компонент передаются при помощи объекта `props`:

```js
import React from 'react';
import ReactDOM from 'react-dom';
function WhoAmI(props) {
    return (
        <>
            <h1>My name is {props.name}, surname {props.surname}</h1>
            <a href={props.link}>My profile</a>
        </>
    )
}
ReactDOM.render(<WhoAmI name="John" surname="Smith" link="http://facebook.com" />, document.getElementById('root'));
```

Можно воспользоваться деструктуризацией:

```js
import React from 'react';
import ReactDOM from 'react-dom';
function WhoAmI({name, surname, link}) {
    return (
        <>
            <h1>My name is {name}, surname {surname}</h1>
            <a href={link}>My profile</a>
        </>
    )
}
ReactDOM.render(<WhoAmI name="John" surname="Smith" link="http://facebook.com" />, document.getElementById('root'));
```

Также можно переписать компонент используя классы:

```js
class WhoAmI extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name, surname, link } = this.props;
        return (
            <>
                <h1>My name is {name}, surname {surname}</h1>
                <a href={link}>My profile</a>
            </>
        )
    }
}
```

Значения установленных атрибутов более устанавливать нельзя.

## Состояния

Состояния записываются в параметре `state`. Для изменения состояния необходимо использовать функцию как обработчик события.

### Пишем функцию и 'биндим' её

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 26,
        };
        this.nextYear = this.nextYear.bind(this);
    }
    nextYear() {
        this.setState(state => ({
            years: ++state.years
        }));
    }
    render() {
        const { name, surname, link } = this.props;
        const { years } = this.state;
        return (
            <>
                <button onClick={this.nextYear}>+++</button>
                <h1>My name is {name}, surname {surname}, years = {years}</h1>
                <a href={link}>My profile</a>
            </>
        )
    }
}
const All = () => {
    return (
        <>
            <WhoAmI name="John" surname="Smith" link="http://facebook.com" />
            <WhoAmI name="Ivan" surname="Smith" link="http://vk.com" />
            <WhoAmI name="Alex" surname="Smith" link="http://facebook.com" />
        </>
    )
}
ReactDOM.render(<All />, document.getElementById('root'));
```

### Описываем функцию в конструкторе

Необходимо описывать функцию в стрелочном виде для сохранения контекста

```js
class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 26,
        };
        this.nextYear = () => {
            this.setState(state => ({
                years: state.years + 2
            }));
        };
    }
    render() {
        const { name, surname, link } = this.props;
        const { years } = this.state;
        return (
            <>
                <button onClick={this.nextYear}>+++</button>
                <h1>My name is {name}, surname {surname}, years = {years}</h1>
                <a href={link}>My profile</a>
            </>
        )
    }
}
```

### Используем ClassFields (эксперриментальный способ)

В этом случае обработчик события записываем вне конструктора. Также вне конструктора записываем параметр `state`.

```js
class WhoAmI extends Component {

    state = {
            years: 26,
        };
    
    nextYear = () => {
        this.setState(state => ({
            years: state.years + 3
        }));
    };
    render() {
        const { name, surname, link } = this.props;
        const { years } = this.state;
        return (
            <>
                <button onClick={this.nextYear}>+++</button>
                <h1>My name is {name}, surname {surname}, years = {years}</h1>
                <a href={link}>My profile</a>
            </>
        )
    }
}
```

### Изменение State


State напряму изменять нельзя. Если state это массив, то нельязя просто удалить или добавить какой-то элемент, если state объект, то нельзя вырезать кусок свойства или добавить еще свойства. Для всего этого необходимо использовать промежуточные переменные. Например можно создать новый массив без каких-то элементов, либо же с новыми элементами итолько потом отправлять его в state.