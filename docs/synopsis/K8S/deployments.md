---
layout: default
title: "Deployments"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 5
---

# Deployments
A Deployment is a higher-level abstraction that manages ReplicaSets and provides declarative updates to Pods. It allows you to define the desired state of your application and automatically manages the underlying ReplicaSets to achieve that state.
## Example Deployment Definition

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-deployment
  labels:
    app: myapp
    type: front-end
spec:
  replicas: 3
  
  selector:
    matchLabels:
      type: front-end
  
  template:
    metadata:
      name: myapp-pod
      labels:
        app: myapp
        type: front-end
    spec:
      containers:
      - name: nginx-container
        image: nginx
```
In this example, we define a Deployment named `myapp-deployment` that maintains 3 replicas of a pod with the label `app: myapp`. The pod template specifies the container to run, which is an Nginx container.  The Deployment will automatically create and manage the underlying ReplicaSets to ensure that the desired number of replicas is always running.
## Commands
Create a Deployment from a definition file:
```bash
kubectl create -f myapp-deployment.yaml
```
Show the list of Deployments:
```bash
kubectl get deployments
```
Detailed information about a Deployment:
```bash
kubectl describe deployment myapp-deployment
```
Delete a Deployment:
```bash
kubectl delete deployment myapp-deployment  
```
