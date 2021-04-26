---
layout: default
title: "Подключение стилей"
grand_parent: "Конспекты"
parent: "React"
nav_order: 8
---

# Подключение стилей

Запускаем в директории проекта `npm install node-sass --save`

Данная комнада устанавливает необходимый пакет для компиляции sass кода.

Установка React Bootstrap: 

`npm install reactstrap bootstrap@4 --save`

Далее прописываем `import 'bootstrap/dist/css/bootstrap.css';` в файле `index.js`

## CSS in JS

Благодаря этому подходу мы не стилизуем компоненты css классами, а создаем стилизованные компоненты и их стили уже инкапсулированы (не пересекутся с другими)

```
npm install --save styled-components
```

Далее в необходимом модуле импортируем: `import styled from 'styled-components';`

Послелу этого создаем:

```js
const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`
```

Вместо `div` можно указать любой другой необходимый тег.

И уже после этого можно вместо конструкции:

```js
<div className="app">
    ...
</div>
```

писать:

```js
<AppBlock>
    ...
</AppBlock>
```

### Использование условий

```js
const AppBlock = styled.div`
    color: ${props => props.colored ? 'red' : 'black'};
    margin: 0 auto;
    max-width: 800px;

<AppBlock colored>
    ...
</AppBlock>
`
```

### Наследование 

```js
const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const StyledAppBlock = styled(AppBlock)`
    background-color: grey;
`
```
