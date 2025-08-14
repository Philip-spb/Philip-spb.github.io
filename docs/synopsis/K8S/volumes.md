---
layout: default
title: "Volumes"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 28
---

# Volumes in Kubernetes
In Kubernetes, a volume is a directory that is accessible to the containers in a pod. It provides a way to persist data beyond the lifecycle of individual containers. Volumes can be used to share data between containers in a pod or to store data that needs to persist across pod restarts.

## Types of Volumes
Kubernetes supports various types of volumes, each suited for different use cases. Some common volume types include:
- **emptyDir**: A temporary directory that is created when a pod is assigned to a node and exists as long as the pod is running. It is often used for scratch space.
- **hostPath**: A directory on the host node that is mounted into the pod. It allows access to the host filesystem.
- **persistentVolumeClaim**: A claim for a persistent volume that can be used to store data that needs to persist beyond the lifecycle of a pod.
- **configMap**: A volume that contains configuration data, which can be consumed by the containers in a pod.
- **secret**: A volume that contains sensitive data, such as passwords or tokens, which can be consumed by the containers in a pod.

## Example of a Volume in a Pod
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
  - name: mycontainer 
    image: myimage
    volumeMounts:
    - mountPath: /data  # Path inside the container where the volume will be mounted
      name: myvolume
  volumes:
  - name: myvolume
    hostPath:  # Using hostPath volume type
      path: /data  # Path on the host to mount into the pod
      type: Directory  # Type of hostPath volume
```

## Persistent Volume
A Persistent Volume (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes. It is independent of the lifecycle of any individual pod and can be used to store data that needs to persist across pod restarts.

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-vol1
spec:
  accessModes:
  - ReadWriteOnce  # The volume can be mounted as read-write by a single node
  # suppoted values for accessModes: ReadOnlyMany, ReadWriteMany, ReadWriteOnce
  capacity:
    storage: 1Gi  # Size of the persistent volume
  hostPath:  # Using hostPath for the persistent volume
    path: /data  # Path on the host to mount into the pod
    type: Directory  # Type of hostPath volume

  persistentVolumeReclaimPolicy: Retain # Policy for reclaiming the persistent volume after it is released

  # awsElasticBlockStore:  # Example of using AWS EBS as a persistent volume
  #   volumeID: aws://us-west-2a/vol-12345678  # ID of the EBS volume
  #   fsType: ext4  # Filesystem type of the EBS volume
  ```

  ```shell
kubectl get pv  # kubectl get percistentvolume
```

## Persistent Volume Claim
A Persistent Volume Claim (PVC) is a request for storage by a user. It allows users to request specific storage resources without needing to know the details of the underlying storage infrastructure.

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: myclaim
spec:
  accessModes:
  - ReadWriteOnce  # The volume can be mounted as read-write by a single node
  resources:
    requests:
      storage: 1Gi  # Size of the persistent volume claim
```

```shell
kubectl get pvc  # kubectl get persistentvolumeclaim

# delete persistent volume claim
kubectl delete pvc myclaim
```