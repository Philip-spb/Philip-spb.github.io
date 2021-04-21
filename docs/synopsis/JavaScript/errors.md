---
layout: default
title: "Обработка ошибок"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 29
---

# Обработка ошибок

Для обработки ошибок существует конструкция `try catch`.

```javascript
try {
    console.log('Normal');
    console.log(a);
    console.log('Result');
} catch (error) { 
    console.log(error);
} finally {
    // код необходимый для завершения начатого процесса
    // выполнится всегда
}
console.log('Still normal');
```

```
Normal
Error
Still normal
```

Самое главное что код после данного блока продолжит работать в любом случае.

## Сущности объекта ошибки

| Сущность | Описание                                 |
| -------- | ---------------------------------------- |
| name     | Описание ошибки                          |
| message  | Описание ошибки                          |
| stack    | Действия которые привели к данной ошибке |