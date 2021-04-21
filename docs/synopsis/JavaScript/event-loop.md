---
layout: default
title: "Event loop"
grand_parent: "Конспекты"
parent: "JavaScript"
nav_order: 34
---

# Event loop

[Демонстрация](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

*Call Stack* – Операции которые выполняются в данный момент.

*Web Apis* – Специальное хранилище в браузере для промежуточных данных. Например при запуске setTimeout тут будет записано что функция должна выполниться через определенное количество времени. Как раз этот контейнер и создан для хранения пожобной информации.

*Callback Queue* – Очередь всех выполняемых в браузере операций.