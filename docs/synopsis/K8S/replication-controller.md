---
layout: default
title: "Replication controller"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 3
---

# Replication controller

A Replication Controller ensures that a specified number of pod replicas are running at any given time. If a pod fails or is deleted, the Replication Controller will create a new pod to replace it.

## Example Replication Controller Definition

```yaml
apiVersion: v1
kind: ReplicationController
metadata:
  name: my-rc
  labels:
    app: my-app
    type: frontend
spec:
  replicas: 3
  selector:
    app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-container
        image: my-image
```

In this example, we define a Replication Controller named `my-rc` that maintains 3 replicas of a pod with the label `app: my-app`. The pod template specifies the container to run.

## Commands

Create a Replication Controller from a definition file:

```bash
kubectl create -f my-rc.yaml
```

Show the list of Replication Controllers:

```bash
kubectl get rc
```

Detailed information about a Replication Controller:

```bash
kubectl describe rc my-rc
```

Delete a Replication Controller:

```bash
kubectl delete rc my-rc
```

Extract the definition to a file:

```bash
kubectl get rc my-rc -o yaml > my-rc-new.yaml
```

Modify the properties of the Replication Controller:

```bash
kubectl edit rc my-rc
```
