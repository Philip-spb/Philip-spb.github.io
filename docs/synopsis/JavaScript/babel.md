---
layout: default
title: "Оптимизация кода под старые браузеры"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 30
---

# Оптимизация кода под старые браузеры

***Babel*** – это transplitter. Инструмент необходимый для перевода кода в старый формат

*Полифилы* – это участки кода эмулирующие поведение современных стандартов

[Инструкция по настройке Babel](https://babeljs.io/docs/en/usage)

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

В `package.json`нужно добавить после `"license": "ISC"`:

```json
"license": "ISC",
"browserslist": [
">1%"
],
```

В файл `webpack.config.js` необходимо добавить в раздел `module`:

```json
rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              debug: true,
              corejs: 3,
              useBuiltIns: "usage"
            }]]
          }
        }
      }
    ]
```

`test` – регулярное выражение для поиска файлов которые необходимо перобразовать

`corejs` – сообщяем о необходимости библиотеки corejs. 
`useBuiltIns: "usage"` - Проверяем имеющийся код и загружаем только те библиотеки, которые необходимы (а не все что есть).

[Документация по core-js](https://github.com/zloirock/core-js)

```
npm i --save-dev babel-loader
npm i --save-dev core-js
```