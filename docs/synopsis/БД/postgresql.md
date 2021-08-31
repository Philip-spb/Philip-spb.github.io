---
layout: default
title: "PostgreSQL"
grand_parent: "Конспекты"
parent: "БД"
nav_order: 1
---

# PostgreSQL

| Команда                                           | Описание                   |
| ------------------------------------------------- | -------------------------- |
| `psql --username=username --dbname=bdname`        | Подключение к указанной БД |
| `psql --username=username dbname < dbname.pg.sql` | Загрузка дампа БД          |
| `pg_dumpall -U dbname > ~/dbname.pgsql.backup`    | Создание дампа БД          |
