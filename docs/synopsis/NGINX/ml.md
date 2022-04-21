---
layout: default
title: "Gunicorn + nginx"
grand_parent: "Конспекты"
parent: "NGINX"
nav_order: 2
---

# Развертывание приложений python wsgi с помощью gunicorn на основе nginx

# Файл конфигурации nginx

Название файла (например) `test.conf`

```
server {
    listen  80;
    server_name 127.0.0.1;
    charset     utf-8;

    location / {
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
      proxy_set_header Host $http_host;
      proxy_redirect off;
      proxy_pass http://0.0.0.0:8080/;
    }
}
```

# Простейшее вариант программы на python

Название файла `wsgi.py`

```py
def application(env, start_response):
    start_response('200 OK', [('Content-Type', 'text/html')])
    return [b"Hello World"]
```

Для работы необходимо установить gunicorn (`pip  install gunicorn`)
Затем выполнить команду `gunicorn -b 0.0.0.0:8080 wsgi`
Также можно указать количество воркеров `gunicorn -b 0.0.0.0:8080 --workers=5 wsgi`

[Неплохое руководство](https://www.8host.com/blog/razvertyvanie-prilozhenij-python-wsgi-s-pomoshhyu-http-servera-gunicorn-na-osnove-nginx281/?ysclid=l2821sh4rd)