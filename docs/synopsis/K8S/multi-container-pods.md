---
layout: default
title: "Multi Container Pods"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 16
---

# Multi Container Pods
Multi-container pods are used in Kubernetes to run multiple containers that need to work closely together. These containers share the same network namespace, which allows them to communicate with each other using `localhost`.

## Example of Multi-Container Pod
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: multi-container-pod
spec:
  containers:
  - name: app-container
    image: myapp:latest
    ports:
    - containerPort: 8080
  - name: sidecar-container
    image: mysidecar:latest
    ports:
    - containerPort: 9090
```

## Use Cases for Multi-Container Pods
1. **Co-located Containers**: When multiple containers need to share resources and communicate with each other, they can be deployed together in a single pod. This is useful for applications that have tightly coupled components.
2. **Regular Init Containers**: These are special containers that run before the main application containers start. They can be used to perform setup tasks, such as downloading dependencies or preparing the environment.
3. **Sidecar Containers**: These containers run alongside the main application container and provide additional functionality, such as logging, monitoring, or proxying requests. They can enhance the capabilities of the main application without modifying its code.

## Example Co-located Containers

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: co-located-containers
spec:
  containers:
  - name: app-container
    image: myapp:latest
    ports:
    - containerPort: 8080
  - name: sidecar-container
    image: mysidecar:latest
    ports:
    - containerPort: 9090
```

## Example Regular Init Container

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  labels:
    app: myapp
spec:
  containers:
  - name: myapp-container
    image: busybox:1.28
    command: ['sh', '-c', 'echo The app is running! && sleep 3600']
  initContainers:
  - name: init-myservice
    image: busybox:1.28
    command: ['sh', '-c', 'until nslookup myservice; do echo waiting for myservice; sleep 2; done;']
  - name: init-mydb
    image: busybox:1.28
    command: ['sh', '-c', 'until nslookup mydb; do echo waiting for mydb; sleep 2; done;']
```

## Example Sidecar Container

```yaml
apiVersion: v1
kind: Pod
metadata: 
  name: sidecar-container-example
spec:
  containers:
  - name: app-container
    image: myapp:latest
    ports:
    - containerPort: 8080
  initContainers:
  - name: sidecar-container
    image: mysidecar:latest
    ports:
    - containerPort: 9090
    command: ["sh", "-c", "echo Sidecar is running... && sleep 10"]
    restartPolicy: Always
```
