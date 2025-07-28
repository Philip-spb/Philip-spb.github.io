---
layout: default
title: "Logging"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 18
---

# Logging
Kubernetes does not provide a built-in logging solution, but it allows you to use various logging solutions. The most common approach is to use a logging agent that collects logs from the nodes and sends them to a central logging system.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: logging-agent
spec:
  containers:
  - name: event-simulator
    image: event-simulator:latest
  - name: image-processor
    image: some-image-processor:latest
```

```shell
kubectl logs -f logging-agent event-simulator
```
