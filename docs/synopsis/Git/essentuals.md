---
layout: default
title: "Основная информация"
grand_parent: "Конспекты"
parent: "Git"
nav_order: 4
---

# Основная информация

## Работа с коммитами

| Команда                                 | Описание                                                                      |
| --------------------------------------- | ----------------------------------------------------------------------------- |
| `git add .`                             | добавление всех файлов в коммит                                               |
| `git commit -m 'Третий коммит'`         | Добавление коммита                                                            |
| `git log`                               | посмотреть всю историю комитов                                                |
| `git log --oneline`                     | посмотреть всю историю комитов без комментариев                               |
| `git log --oneline --graph`             | посмотреть всю историю комитов без комментариев и с графической визуализацией |
| `git rebase -i HEAD~2`                  | Объединение двух последних коммитов                                           |
| `git commit --amend -m "ваш заголовок"` | Изменить текст последнего коммита                                             |

## Откат изменений

| Команда                      | Описание                                                |
| ---------------------------- | ------------------------------------------------------- |
| `git reset --soft 7b4129c09` | мягкий откат к комитту                                  |
| `git reset --hard 7b4129c09` | жесткий откат к комитту (с удалением всех новых файлов) |
| `git reset HEAD index.html`  |                                                         |
| `git checkout -- index.html` |                                                         |

## Работа с ветками

| Команда                         | Описание                                    |
| ------------------------------- | ------------------------------------------- |
| `git checkout master`           | Переключение между ветками                  |
| `git checkout -b bug-cart`      | Создание новой ветки с указанным именем     |
| `git branch`                    | Посмотреть все доступные ветки              |
| `git branch -d feature-cart`    | удаление указанной ветки                    |
| `git merge feature-cart`        | Слияние с указанной веткой                  |
| `git status`                    | посмотреть отчет (в том числе о слиянии)    |
| `git diff`                      | посмотреть подробный отчет по различиям     |
| `git branch -m newname`         | Переименование текущей локальной ветки      |
| `git branch -m oldname newname` | Переименование произвольной локальной ветки |

## Работа со Stash

| Команда                     | Описание                                                        |
| --------------------------- | --------------------------------------------------------------- |
| `git stash`                 | Временное (без коммита) сохранение проекта                      |
| `git stash list`            | Посмотреть список временных коммитов                            |
| `git stash apply stash@{0}` | слияние со `stash@{0}` либо c последним, если не указывать явно |
| `git stash pop`             | взять последний стэш и удалить его из списка                    |
| `git stash drop stash@{0}`  | удалить стэш с номером                                          |

## Алгоритм создания новой ветки для безопасных модификаций:

1.  Создаем новую ветку (`git checkout -b bug-cart`)
2.  Вносим изменения
3.  `git add .`
4.  `git commit`
5.  Далее переключаемся на основную ветку `git checkout master`

## Работа с удаленным репозиторием

| Команда                                                                                      | Описание                                                                                                     |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `ssh-keygen`                                                                                 | генерируем ssh ключ (нужно для синхронизации по ssh)                                                         |
| `git remote set-url origin [git@github.com](mailto:git@github.com):Philip-spb/ecco-shop.git` | изменение пути до удаленного репозитория                                                                     |
| `git push --set-upstream origin new-git`                                                     | залить изменения на внешний сервер в новую ветку (указываем начальную ветку и затем указываем в какую залить |
| `git pull`                                                                                   | Забрать изменения с внешнего сервера                                                                         |
