---
layout: default
title: "Rolling Updates and Rollbacks"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 21
---

# Rolling Updates and Rollbacks in Kubernetes
Rolling updates and rollbacks are essential features in Kubernetes that allow you to update applications without downtime and revert to previous versions if necessary.

## Rollout Commands
Kubernetes provides several commands to manage rollouts:
```shell
# Check the status of a rollout
kubectl rollout status deployment/my-deployment 
# Pause a rollout
kubectl rollout pause deployment/my-deployment
# Resume a paused rollout
kubectl rollout resume deployment/my-deployment
# Undo a rollout to the previous version
kubectl rollout undo deployment/my-deployment
# View the history of rollouts
kubectl rollout history deployment/my-deployment
```

## Deployment Strategy
Kubernetes supports different deployment strategies, including:
- **Rolling Update**: Gradually replaces old pods with new ones, ensuring that some pods are always available.
- **Recreate**: Terminates all old pods before creating new ones, which can lead to downtime.
- **Blue-Green Deployment**: Maintains two separate environments (blue and green) to switch traffic between them during updates.

## Kubectl apply
The `kubectl apply` command is used to update resources in Kubernetes. It applies changes to the current state of the cluster based on the provided configuration files.
```shell
# Apply changes to a deployment
kubectl apply -f deployment.yaml
# Apply changes to a service
kubectl apply -f service.yaml
```

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-container
        image: my-image:latest
        ports:
        - containerPort: 80
      strategy:
        type: RollingUpdate
        rollingUpdate:
          maxSurge: 1
          maxUnavailable: 1
```
