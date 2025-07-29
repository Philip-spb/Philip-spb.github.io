---
layout: default
title: "Labels, Selectors, and Annotations"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 20
---

# Labels, Selectors, and Annotations in Kubernetes
Labels, selectors, and annotations are essential components in Kubernetes for organizing and managing resources.

## Labels
Labels are key-value pairs attached to Kubernetes objects, such as pods, services, and deployments. They are used to identify and group resources based on specific criteria. For example, you can use labels to indicate the environment (e.g., "production" or "staging") or the application version.

## Selectors
Selectors are used to filter and select Kubernetes resources based on their labels. There are two types of selectors: equality-based and set-based. Equality-based selectors allow you to select resources with specific label values, while set-based selectors enable you to select resources based on a set of values.

## Annotations
Annotations are also key-value pairs, but they are used to store non-identifying metadata about Kubernetes objects. Unlike labels, annotations are not used for selection purposes. Instead, they can be used to store information such as build details, contact information, or any other relevant data.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: example-pod
  labels:
    app: my-app
    env: production
  annotations:
    description: "This is an example pod"
spec:
  containers:
  - name: example-container
    image: example-image:latest
```

```shell
# Get all pods with a specific label
kubectl get pods -l app=my-app,env=production,bu=finance

# Get all pods with a specific selector
kubectl get pods --selector='env in (production, staging)'

# Get a specific pod by name
kubectl get pod example-pod
```

```shell
# Describe a pod to see its annotations
kubectl describe pod example-pod
```

```shell
# Update a pod's labels
kubectl label pod example-pod env=staging --overwrite
# Update a pod's annotations
kubectl annotate pod example-pod description="Updated description" --overwrite
```

## ReplicaSet

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: example-replicaset
  labels:
    app: App1
spec:
    replicas: 3
    selector:
        matchLabels:
        app: App1
    template:
        metadata:
        labels:
            app: App1
        spec:
        containers:
        - name: example-container
            image: example-image:latest
```

## Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: example-service
  labels:
    app: App1
spec:
  selector:
    app: App1
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8080
```

## Annotation
````yaml
apiVersion: v1
kind: Pod
metadata:
  name: example-pod
  annotations:
    description: "This is an example pod"
    buildversion: "v1.0.0"
spec:
  containers:
  - name: example-container
    image: example-image:latest
````
