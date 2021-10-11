---
layout: default
title: "Обработка исключений"
grand_parent: "Конспекты"
parent: "DRF"
nav_order: 1
---

# Обработка исключений

[Пользовательский обработчик исключений](https://www.django-rest-framework.org/api-guide/exceptions/)

```py
from rest_framework.views import exception_handler

def custom_exception_handler(exc, context):
    # Call REST framework's default exception handler first,
    # to get the standard error response.
    response = exception_handler(exc, context)

    # Now add the HTTP status code to the response.
    if response is not None and response.status_code == 404:
        response.data = {  
            "message": "Instance not found.",  
            "error": "HTTP_404_NOT_FOUND",  
        }

    return response
```
Чтобы применить этот обработчик, необходимо добавить его в настройки REST_FRAMEWORK :

```py
REST_FRAMEWORK = {
    'EXCEPTION_HANDLER': 'my_project.my_app.utils.custom_exception_handler'
}
```