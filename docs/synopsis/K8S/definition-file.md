---
layout: default
title: "K8S definition file"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 1
---

# K8S Definition File

A K8s definition file always contains the 4 top-level fields:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
    containers:
    - name: my-container
        image: my-image
```

`apiVersion` indicates the API version used by the object. In this case, it is `v1`, which means we are using the first stable version of the Kubernetes API.

```yaml
kind: Pod
```

`kind` specifies the type of object. In this case, it is `Pod`, which means we are creating a Pod object.

```yaml
metadata:
  name: my-pod
  labels:
    app: my-app
    type: frontend
```

`metadata` contains metadata about the object, such as its name. In this case, we set the Pod name to `my-pod`.

```yaml
spec:
    containers:  # list of containers in the Pod
    - name: my-container
        image: my-image # Image on the Docker repository
```

`spec` contains the specification of the object. In this case, we define the containers that will run in the Pod. We create a single container named `my-container` with the image `my-image`.

| Kind | Version |
| ---- | ------- |
| Pod | v1 |
| Service | v1 |
| Deployment | apps/v1 |
| StatefulSet | apps/v1 |
| ReplicaSet | apps/v1 |

Command to create a Pod from a definition file:

```bash
kubectl create -f my-pod.yaml
```

Command to show the list of Pods:

```bash
kubectl get pods
```

Detailed information about a Pod:

```bash
kubectl describe pod my-pod
```
