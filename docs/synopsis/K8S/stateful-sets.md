---
layout: default
title: "Stateful Sets"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 30
---

# Stateful Sets in Kubernetes
Stateful Sets are a Kubernetes resource used to manage stateful applications. They provide guarantees about the ordering and uniqueness of pods, making them suitable for applications that require stable network identities and persistent storage.

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: my-statefulset
spec:
  serviceName: "my-service"  # Service that manages the network identity of the pods
  replicas: 3  # Number of replicas
  selector:
    matchLabels:
      app: myapp  # Label selector to identify the pods managed by this StatefulSet
  template:
    metadata:
      labels:
        app: myapp  # Labels for the pods
    spec:
      containers:
      - name: mycontainer
        image: myimage  # Container image
        ports:
        - containerPort: 80  # Port exposed by the container
        volumeMounts:
        - name: myvolume  # Name of the volume to mount
          mountPath: /data  # Path inside the container where the volume will be mounted
  volumeClaimTemplates:  # Template for creating Persistent Volume Claims
  - metadata:
      name: myvolume
    spec:
      accessModes:
      - ReadWriteOnce  # The volume can be mounted as read-write by a single node
      resources:
        requests:
          storage: 1Gi  # Size of the persistent volume
      storageClassName: my-storage-class  # Storage class to use for the persistent volume
```
## Key Features of Stateful Sets
- **Stable Network Identity**: Each pod in a Stateful Set has a unique, stable network identity, which is maintained across rescheduling.
- **Ordered Deployment and Scaling**: Pods are created, updated, and deleted in a defined order, ensuring that the application can handle changes gracefully.
- **Persistent Storage**: Stateful Sets can automatically provision persistent storage for each pod using Persistent Volume Claims, ensuring that data is retained even if the pod is rescheduled or restarted.
- **Rolling Updates**: Stateful Sets support rolling updates, allowing you to update the application without downtime.
