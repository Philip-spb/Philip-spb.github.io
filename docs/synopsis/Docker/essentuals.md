---
layout: default
title: "Основная информация"
grand_parent: "Конспекты"
parent: "Docker"
nav_order: 4
---

# Основная информация

[Как использовать Django, PostgreSQL и Docker](https://webdevblog.ru/kak-ispolzovat-django-postgresql-i-docker/)

[Неплохое руководство на Английском языке с примером создания суперпользователя в контейнере](https://learndjango.com/tutorials/django-docker-and-postgresql-tutorial)

[Оригинал стать про установку Django в Docker](https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx/)

[Видео про установку Django в Docker](https://www.youtube.com/watch?v=t8gZD0lwu2k&feature=youtu.be)

# Основные команды Docker

[Неплохое руководство](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes-ru)

|Команда|Описание|
|---|---|
|`docker ps`|Посмотреть все запущенные образы|
|`docker build -t web-hello .`|Создание контейнера|
|`docker run --rm -p 8080:8080 web-hello`|Вызов контейнера. Параметр -rm указывает на то что контейнер должен удалиться после работы|
|`docker run --rm -p 8080:8080 -e TZ=Europe/Moscow -v /Users/philip/PycharmProjects/docker-web-hello-world/resources:/usr/src/app/resources web-hello`|Вызов контейнера с монтированием локальной папки|
|`docker vloume create NAME`|Создаем Volume для хранения данных|
|`docker run --rm -p 8080:8080 -e TZ=Europe/Moscow -v web:/usr/src/app/resources web-hello`|Вызов контейнера с монтированием локальной папки к созданному volume|
|`docker rm -f $(docker ps -a -q)`|Удалить все контейнеры|
|`docker exec -i -t 04b9b377f8aa bash`|Подключение к существующему контейнеру с ID 04b9b377f8aa|

# Docker Images

|Команда|Описание|
|---|---|
|`docker images -a`|Вывести список всех доступных образов|
|`docker rmi 768307cdb962`|Удалить образ с ID 768307cdb962|
|`docker rmi $(docker images -a -q)`|Удалить все образы из системы|

# Docker Volumes

|Команда|Описание|
|---|---|
|`docker volume ls`|Вывпсти список всех Volume|
|`docker volume rm $(docker volume ls -q)`|Удалить вссе созданные Volume|

# Docker Hub

|Команда|Описание|
|---|---|
|`docker build -t philipspb/web-hello .`|Созданение репозитория для docker hub|
|`docker login`|Перед пушкм в репозиторий необходимо в него залогиниться|
|`docker push philipspb/web-hello`|Выгрузка нашего образа на docker hub|

# Docker Compose

Это надстройка над Docker для того чтобы не указывать всю кучу параметров в docker run. Все оформляется в аккуратный файл.

## Пример файла docker-compose.yaml

```yaml
version: "3"

volume:
# Здесь определяем какие будем использовать Volume. 
# Если их не будет, Docker их создаст
	mongodb_vlolume:
	
services:
	youtube_statistic:
# Указываем из какой папки собирать образ
	build: StaticManager/
# Данны параметр означает что если мы перезапустим docker,
# то docker автоматически запустит все указанные контейнеры
	restart: always
	environment:
		- TZ=Europe/Moscow
#	///
# Тут у нас ссылка на контейнер с именем mongodb
# Как только контейнер mongodb запустится, к нему можно будет обратиться по этому имени
# Порты мы не указываем, только лишь другой контейнер в рамках этого запуска сможет получить
# к нему доступ
		- MONGO_DB_ADDR=mongodb
		- MONGO_DB_PORT=27017
#	///

web_service:
	build: WebService/
	restart: always

mongodb:
# Всесто параметра 'build' указываем параметр 'image' и просим загрузить 'последний' образ
	image: mongo:latest
	volumes: 
		mongodb_volume:/data/db
	restart: always
```

|Команда|Описание|
|---|---|
|`docker-compose build`|Собираем образ|
|`docker-compose up -d`|Запускаем контейнер|

Пример файла docker-compose.yaml для созданного образа:

```yaml
version: "3"

services:
        hello:
                image: philipspb/web-hello
                restart: always
                ports:
                        - 8080:8080
                environment:
                        - TZ=Europe/Moscow
```