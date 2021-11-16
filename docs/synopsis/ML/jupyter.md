---
layout: default
title: "Установка Jupyter Notebook"
grand_parent: "Конспекты"
parent: "ML"
nav_order: 2
---

# Установка Jupyter Notebook

Его необходимо установить в окружение по умолчанию, т.е. необходимо выйти из виртуального окружения

```sh
pip install jupyter
```

## Установка ядра для работы с python

Входим в виртуальное окружение

```sh
pip install ipykernel
```

Связываем имя окружения с питоном и пользователем:

```sh
python -m ipykernel install --user --name <your virtual env name> --display-name "Python (<your virtual env name>)"
```

Например, для окружения “venv” команда будет выглядеть так:

```sh
python -m ipykernel install --user --name vnv --display-name "Python (venv)"
```

## Проверка работоспособности jupyter

При необходимости выходим из виртуального окружения и выполняем команду

```sh
jupyter-notebook
```
Загрузится веб-окно Jupyter notebook в браузере и появится возможность выбрать любой блокнот с помощью кнопки Upload и начать с ним работать.

## Google Colab

[google colab](https://colab.research.google.com/)

Для испольования файлов с google диска необходимо в блокноте google colab выполнить следующий код

```py
from google.colab import drive
drive.mount('/content/drive')
```

При переходе по ссылке необходимо получить код и вставить его в соответствующее окно

Для установки необходимых библиотек в Google Colab необходимо выполнить следующий код

```py
!pip install gTTS
```

```py
from gtts import gTTS

tts = gTTS('Hello!')
tts.save('/content/drive/My Drive/Colab Notebooks/hello.mp3')
```

Использование собственных модулей

```py
path = "path/to/directory/"

import sys
sys.path.append(path)
```
