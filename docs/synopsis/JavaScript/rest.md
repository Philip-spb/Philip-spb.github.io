---
layout: default
title: "Rest оператор и параметры по умолчанию (ES6)"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 14
---

Rest оператор (...) собирает в массив все оставшиеся сущности передаваемые в качестве параметров 

```javascript
const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};
log('basic', 'rest', 'operator', 'usage');
```

```
basic rest [ 'operator', 'usage' ]
```