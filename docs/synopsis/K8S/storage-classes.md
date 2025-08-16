---
layout: default
title: "Storage Classes"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 29
---

# Storage Classes in Kubernetes
Storage Classes in Kubernetes provide a way to define different types of storage available in the cluster. They allow administrators to specify the characteristics of storage, such as performance, availability, and access modes, which can be used by developers to request storage resources dynamically.

## What is a Storage Class?
A Storage Class is a Kubernetes resource that describes the types of storage available in the cluster. It defines the provisioner that will be used to create Persistent Volumes (PVs) and the parameters that will be passed to the provisioner. Storage Classes can be used to create PVs dynamically when a Persistent Volume Claim (PVC) is created.

## Static provisioning
Static provisioning involves manually creating Persistent Volumes (PVs) that are then bound to Persistent Volume Claims (PVCs). This method is useful when you have specific storage requirements or when you want to use existing storage resources.

```shell
gcloud beta compute disks create my-disk --size=1GB --region=us-east1 pd-disk
```

```yaml
# pv-definition.yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-vol1
spec:
  accessModes:
  - ReadWriteOnce  # The volume can be mounted as read-write by a single node
  capacity:
    storage: 500Mi  # Size of the persistent volume
  gcePersistentDisk:
    pdName: pd-disk
    fsType: ext4
```

```yaml
# sc-definition.yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: google-storage
provisioner: kubernetes.io/gce-pd  # Provisioner for Google Cloud
parameters:
  type: pd-standard  # [pd-standard | pd-ssd] # Type of disk to use
  replication-type: none # [none | regional-pd] # Replication type for the disk
```

```yaml
# pvc-definition.yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: myclaim
spec:
  accessModes:
  - ReadWriteOnce  # The volume can be mounted as read-write by a single node
  resources:
    requests:
      storage: 500Gi  # Size of the requested volume
  storageClassName: google-storage  # Name of the Storage Class to use
```

```yaml
# pod-definition.yaml
apiVersion: v1
kind: Pod
metadata:
  name: random-number-generator
spec:
  containers:
  - image: alpine
    name: alpine
    command: ["/bin/sh", "-c"]
    args: ["shuf -i 0-100 -n 1 >> /opt/"]
    volumeMounts:
    - mountPath: /opt  # Path inside the container where the volume will be mounted
      name: data-volume
  volumes:
  - name: data-volume
    persistentVolumeClaim:  # Using a Persistent Volume Claim to mount the volume
      claimName: myclaim  # Name of the Persistent Volume Claim
```
