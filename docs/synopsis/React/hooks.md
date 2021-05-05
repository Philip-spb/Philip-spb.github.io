---
layout: default
title: "Хуки"
grand_parent: "Конспекты"
parent: "React"
nav_order: 12
---

# Хуки

Это функции которые позволяю не создавать классовых элементов вообще. Они могут быть использованны только в компонентах функциях. Хуки нельзя использовать внутри циклов, условий или вложенных функций.

```js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [data, refreshData] = useState([{ name: 'Ivan', sex: 'male' }]);

  useEffect(() => {
    console.log(data);
    return (() => { 
      console.log('exit');
    })
  })

  return (
    <>
      <div>
        <p>Вы кликнули {count} раз</p>
        <button
          onClick={() => setCount(count + 1)}>Кликни</button>
      </div>
      <div>
        {data.map(item => {
          return (
            <div>Имя: {item.name}, пол: {item.sex}</div>
          );
        })}
        <button onClick={() => { refreshData(data => ([...data, { name: 'Philip', sex: 'male' }])) }}>Добавить данные</button>
      </div>
    </>
  );
}
export default App;
```

## Хуки состояний

`useState` – это хук. После того как он отработает, он возвращает массив.

## Хуки эффектов

Мы можем отлавливать разные моменты в жизни компонентов (появились, обновились, исчезли) и в эти моменты можно делать различные запросы.

`useEffect` – вызывается каждый раз когда происходят изменения в приложении. `return` в данном хуке выполняется когда компонент исчезает со страницы.