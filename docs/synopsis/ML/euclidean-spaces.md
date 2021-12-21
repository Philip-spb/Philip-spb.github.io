---
layout: default
title: "Евклидовы пространства"
grand_parent: "Конспекты"
parent: "ML"
nav_order: 6
---

# Евклидовы пространства

## Нормы векторов

**Единчная норма**

$$ \left\|x\right\| _{1} =\sum\limits_{i=1}^{n}{\left|x_{i} \right| } $$

**"Квадратическая" или "евклидова" норма**

длина вектора

$$ \left\|x\right\| _{2} =\sqrt{\sum\limits_{i=1}^{n}{x_{i}^{2} } } $$

**Бесконечня норма**

$$ \left\|x\right\| _{\infty } = \underset{i=1,...,n}{\max} \left|x_{i} \right|  $$

```py
A = np.array([1,2])
print(np.linalg.norm(A, ord=1))  # 3.0
print(np.linalg.norm(A, ord=2))  # 2.23606797749979
print(np.linalg.norm(A, ord=np.inf))  # 2.0
```

## Меры сходства векторов

### Kernel-similarity

sim(x,y)=ker(dist(x,y))
ker(d)=exp(−k*d), здесь k - коэффициент плавности ядра

```py
user = np.array([10,0,0,20,0,5])
user_1 = np.array([20,3,0,35,0,12])
user_2 = np.array([9,0,3,15,0,2])
user_3 = np.array([2,5,3,0,10,0])

dist_1 = np.linalg.norm(user - user_1, ord=2)
dist_2 = np.linalg.norm(user - user_2, ord=2)
dist_3 = np.linalg.norm(user - user_3, ord=2)

# с использованием ядра получаем такие оценки близости
k = 0.05
ker = lambda d: np.exp(-k * d)

round(ker(dist_1), 3), round(ker(dist_2), 3), round(ker(dist_3), 3)  # (0.376, 0.718, 0.287)
```

### Cosine-similarity

Для оценки близости используем косинус угла между векторами

```py
cos_1 = user @ user_1 / np.linalg.norm(user, ord=2) / np.linalg.norm(user_1, ord=2)
cos_2 = user @ user_2 / np.linalg.norm(user, ord=2) / np.linalg.norm(user_2, ord=2)
cos_3 = user @ user_3 / np.linalg.norm(user, ord=2) / np.linalg.norm(user_3, ord=2)
round(cos_1, 3), round(cos_2, 3), round(cos_3, 3)  # (0.994, 0.977, 0.074)
```

Также этот способ есть в библиотеке `sklearn`

```py
from sklearn.metrics.pairwise import cosine_similarity as cosine_sim

users = np.vstack([user, user_1, user_2, user_3])
print(f'users =\n {users}')

Smat = cosine_sim(users)
print(f'users_similarity =\n {np.round(Smat, 3)}')

# users =
#  [[10  0  0 20  0  5]
#  [20  3  0 35  0 12]
#  [ 9  0  3 15  0  2]
#  [ 2  5  3  0 10  0]]

# users_similarity =
#  [[1.    0.994 0.977 0.074]
#  [0.994 1.    0.968 0.111]
#  [0.977 0.968 1.    0.129]
#  [0.074 0.111 0.129 1.   ]]
 ```
