---
layout: default
title: "Resource Requirements"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 13
---

# Resource Requirements
Resource requirements in Kubernetes allow you to specify the minimum and maximum CPU and memory resources for containers in a Pod. This helps the scheduler make better decisions about where to place Pods based on available resources.

## Defining Resource Requirements
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
spec: 
  containers:
  - name: myapp-container
    image: myapp-image
    ports:
    - containerPort: 8080
    resources:
      requests:
        memory: "1Gi"
        cpu: "250m"  # 0.25 CPU cores
      limits:
        memory: "2Gi"
        cpu: "500m"  # 0.5 CPU cores
```

### CPU
1 CPU equals:
- 1 AWS vCPU
- 1 GCP vCPU
- 1 Azure vCPU
- 1 Hyperthread on a physical CPU core

### Memory
Memory is specified in bytes, but you can use suffixes like `Mi` (Mebibytes) or `Gi` (Gibibytes) for convenience:
- `64Mi` = 64 Mebibytes
- `128Mi` = 128 Mebibytes
- `1Gi` = 1024 Mebibytes

- `1 G (Gigabyte)` = 1,000,000,000 bytes
- `1 M (Megabyte)` = 1,000,000 bytes
- `1 K (Kilobyte)` = 1,000 bytes

- `1 Gi (Gibibyte)` = 1,073,741,824 bytes
- `1 Mi (Mebibyte)` = 1,048,576 bytes
- `1 Ki (Kibibyte)` = 1,024 bytes

## Commands
```bash
# To view the resource requirements of a Pod
kubectl describe pod myapp-pod
# To view the resource usage of all Pods in the current namespace
kubectl top pods
# To view the resource usage of a specific Pod
kubectl top pod myapp-pod
# To view the resource usage of all nodes
kubectl top nodes
# To view the resource usage of a specific node
kubectl top node myapp-node
```

## LimitRanges
You can also set default resource requests and limits for all Pods in a namespace using a `LimitRange` object. This ensures that all Pods have a baseline resource allocation.
```yaml
apiVersion: v1
kind: LimitRange
metadata:
  name: myapp-limit-range
spec:
  limits:
  - default:  # limit
      memory: "1Gi"
      cpu: "500m"
    defaultRequest: # request
      memory: "512Mi"
      cpu: "250m"
    max:  # limit
      memory: "2Gi"
      cpu: "1"
    min:  # request
      memory: "256Mi"
      cpu: "100m"
    type: Container
```

## Resource Quotas
You can also set resource quotas for a namespace to limit the total amount of resources that can be used by all Pods in that namespace.
```yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: myapp-resource-quota
spec:
  hard:
    requests.cpu: "10"  # Total CPU requests across all Pods
    requests.memory: "20Gi"  # Total memory requests across all Pods
    limits.cpu: "20"  # Total CPU limits across all Pods
    limits.memory: "40Gi"  # Total memory limits across all Pods
```
