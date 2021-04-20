---
layout: default
title: "Webpack"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 27
---

# Webpack

[Информация по настройке Webpack](https://webpack.js.org/guides/getting-started/)

## Используем CommonJS

В первом файле `main.js` создаем функцию для экспорта и экспортируем её при помощи метода `exports`

```javascript
function myModule() {
    this.hello = function () {
        console.log('hello');
    };
    this.goodby = function () {
        console.log('goodby');
    };
}
module.exports = myModule;
```

В файле в котором мы хотим использовать экспортируемую функцию `index.js` мы её импортируем при помощи `require`, при этом расширение не указывается

```javascript
const myModule = require('./lesson71');
const myModuleInstance = new myModule();
myModuleInstance.hello();
myModuleInstance.goodby();
```

Для сборки модулей используется `Webpack`. Эта утилита позволяет не только собирать скрипты, но и обрабатывать проект.

Пример файла `webpack.config.js`

```javascript
'use strict';
let path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  watch: true,
  devtool: "source-map",
  module: {}
};
```
`mode: 'development'` – значит что проект собирается в [отладочном режиме](https://webpack.js.org/configuration/mode/#usage).

`watch: true` – значит webpack будет автоматически отслеживать изменения в наших файлах и каждый раз пересобирать проект при изменении.

`devtool: "source-map"` – `source-map` хранит информацию об исходниках для удобства отладки кода. [Возможные режимы](https://webpack.js.org/configuration/devtool/#devtool) devtool.