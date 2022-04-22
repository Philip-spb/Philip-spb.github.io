---
layout: default
title: "Gunicorn + Nginx"
grand_parent: "Конспекты"
parent: "NGINX"
nav_order: 2
---

# Развертывание приложений Python Wsgi с помощью Gunicorn на основе Nginx


# Простейший вариант
## Файл конфигурации Nginx

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

Рестарт nginx `nginx -s reload`

## Простейшее вариант программы на Python

Название файла `wsgi.py`

```py
def application(env, start_response):
    start_response('200 OK', [('Content-Type', 'text/html')])
    return [b'Hello World']
```

Для работы необходимо установить gunicorn (`pip  install gunicorn`)
Затем выполнить команду `gunicorn -b 0.0.0.0:8080 wsgi`
Также можно указать количество воркеров `gunicorn -b 0.0.0.0:8080 --workers=5 wsgi`

[Неплохое руководство](https://www.8host.com/blog/razvertyvanie-prilozhenij-python-wsgi-s-pomoshhyu-http-servera-gunicorn-na-osnove-nginx281/?ysclid=l2821sh4rd)

## Запуск Django + Gunicorn

Для запуска необходимо установить модуль gunicorn

Далее выполняется команда `gunicorn mysite.wsgi`

## Файл конфигурации Nginx

```
server {
    listen  80;
    server_name mynewproject.ru;
    charset     utf-8;
    access_log /tmp/testsite_access_log.log;  # логи 
    error_log /tmp/testsite_error_log.log;
    
    location / {
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
      proxy_set_header Host $http_host;
      proxy_redirect off;
      proxy_pass http://127.0.0.1:8000/;
    }

    location /static {
      alias /testsite/mysite/static;
    }

    location /media {
      alias /testsite/mysite/media;
    }
}
```

Также в `/etc/hosts` нужно указать название нашего тестового домена `mynewproject.ru`
```
127.0.0.1 mynewproject.ru
```
