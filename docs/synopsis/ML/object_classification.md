---
layout: default
title: "Классификация объектов"
grand_parent: "Конспекты"
parent: "ML"
nav_order: 11
---

# Классификация объектов

## Метод kNN - k ближайших соседей

Метод k-ближайших соседей не нуждается в предварительной фазе обучения и начинает классифицировать точки данных на основе большинства голосов их соседей.

![Метод kNN - k ближайших соседей](/assets/images/plt17.png)

### Применение метода kNN с использованием sklearn

```py
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn import metrics

class KNeighborsClassificator:
    
    def __init__(self, random_state=42):
        self.model = None

    def fit(self, X_train, y_train):
        self.model = KNeighborsClassifier(n_neighbors=30)
        self.model.fit(X_train, y_train)

    def predict(self, X_test):
        y_test = self.model.predict(X_test)      
        return y_test

file_name = "file.csv"
csv_file_path = dir_path + file_name
data = pd.read_csv(csv_file_path, sep=';')

XY = data.values
Xm = XY[:,:-1]
Y = XY[:,-1]

# Разделим выборку на тестовую и тренировочную
x_train, x_test, y_train, y_test = train_test_split(Xm, Y, train_size=0.7, random_state=42)

knn = KNeighborsClassificator()
knn.fit(x_train, y_train)

y_predicted = knn.predict(x_test)

print(f'Точность на обучающей выборке= {metrics.accuracy_score(y_train, knn.predict(x_train))}')
print(f'Точность на тестовой выборке= {metrics.accuracy_score(y_test, y_predicted)}')

print(f'Матрица соответсвия: \n {metrics.confusion_matrix(y_test, y_predicted)}')

# Точность на обучающей выборке= 0.6767515923566879
# Точность на тестовой выборке= 0.6888888888888889
# Матрица соответсвия: 
#  [[148  37]
#  [ 47  38]]
```

![confusion matrix](/assets/images/plt18.png)

