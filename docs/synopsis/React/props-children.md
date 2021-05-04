---
layout: default
title: "Дочерние модули"
grand_parent: "Конспекты"
parent: "React"
nav_order: 10
---

# Дочерние модули

Получить доступ к дочерним модулям можно при помощи функции  `this.props.children`. 

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Example extends Component {
    render() {
        return (
            React.Children.map(this.props.children, (child, i) => {
                return React.cloneElement(child, { className: `class-${i}` })
            })
        )
    }
}

ReactDOM.render(<Example>
    <h1>Привет</h1>
    <h2>новый</h2>
    <h3>Мир</h3>
</Example>, document.getElementById('root'));
```

Для того, чтобы добавить свойства дочерним моделям необходимо произвести их копирование и передавать дополнительные свойства уже клонированным элементам
