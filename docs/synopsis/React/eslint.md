---
layout: default
title: "Настройка ESLint"
grand_parent: "Конспекты"
parent: "React"
nav_order: 4
---

# Настройка ESLint

Для работы с ESLint нужно деактиваровать JSHint.

[Документация по установке](https://eslint.org/docs/user-guide/getting-started)

```
npm install -g eslint
```

При необходимости указываем sudo

Для настройки ESLint необходимо перейтив папку проекта и запустить `eslint --init` и ответить на вопросы.

В результате будет сгенерирован файл `.eslintrc.json`. 

Чтобы этот файл распространялся глобально, его надо переместить в корневую рабочую папку.

## Установка дополнительных плагинов

[ESLint plugin Babel](https://github.com/babel/eslint-plugin-babel)

```
npm install eslint-plugin-babel -g
```

[ESLint plugin React](https://www.npmjs.com/package/eslint-plugin-react)

```
npm install eslint-plugin-react -g
```

**Пример файла .eslintrc.json:**

```json
{
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended",
                 "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "babel"
    ],
    "rules": {
        "no-unused-vars": ["error", { "caughtErrorsIgnorePattern": "^ignore" }],
    	"react/jsx-uses-react": 1,
        "react/jsx-uses-vars": "error",

        "linebreak-style": [
            "error",
            "unix"
        ],
        "babel/new-cap": 1,
        "babel/camelcase": 1,
        "babel/no-invalid-this": 1,
        "babel/object-curly-spacing": 1,
        "babel/semi": 1,
        "babel/no-unused-expressions": 1,
        "babel/valid-typeof": 1

    }
}
```