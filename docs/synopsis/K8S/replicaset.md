---
layout: default
title: "ReplicaSet"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 4
---

# ReplicaSet
A Replicaset ensures that a specified number of pod replicas are running at any given time. If a pod fails or is deleted, the Replicaset will create a new pod to replace it.
## Example Replicaset Definition

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: myapp-replicaset
  labels:
    app: myapp
    type: front-end
spec:
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
  
  replicas: 3
  selector:
    matchLabels:
      type: front-end

```
In this example, we define a Replicaset named `myapp-replicaset` that maintains 3 replicas of a pod with the label `app: myapp`. The pod template specifies the container to run, including environment variables sourced from a ConfigMap.
## Commands
Create a Replicaset from a definition file:
```bash
kubectl create -f myapp-replicaset.yaml
```
Show the list of Replicasets:
```bash
kubectl get rs
```
Detailed information about a Replicaset:
```bash
kubectl describe rs myapp-replicaset
```
Delete a Replicaset:
```bash
kubectl delete rs myapp-replicaset
```
This command will delete the Replicaset and all its associated pods.
Extract the definition to a file:
```bash
kubectl get rs myapp-replicaset -o yaml > myapp-replicaset.yaml
```
This command will output the current definition of the Replicaset to a YAML file named `myapp-replicaset.yaml`.

```bash
kubectl replace -f myapp-replicaset.yaml
```
This command will replace the existing Replicaset with the definition provided in the `myapp-replicaset.yaml` file. This is useful for updating the Replicaset configuration without deleting it first

```bash
kubectl scale --replicas=6 -f myapp-replicaset.yaml
```
This command will scale the Replicaset to 6 replicas, creating or deleting pods as necessary to reach the desired count.

```bash
kubectl scale --replicas=6 rs myapp-replicaset
```
This command will also scale the Replicaset named `myapp-replicaset` to 6 replicas, similar to the previous command but using the `rs` resource type directly.
