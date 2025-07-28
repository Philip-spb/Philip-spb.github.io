---
layout: default
title: "Readiness and Liveness Probes"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 17
---

## Readiness Probes
Readiness probes are essential in Kubernetes to ensure that a pod is ready to accept traffic. They help manage the lifecycle of pods by determining when they are ready to serve requests.

### POD Status
- **Pending**: The pod is waiting for resources to be allocated or for scheduling.
- **ContainerCreating**: The pod is being created, and its containers are being initialized.
- **Running**: The pod is running and ready to accept traffic.
- **Not Ready**: The pod is not ready to accept traffic, often due to initialization tasks or configuration issues.
- **Failed**: The pod has encountered an error and is not functioning correctly.

### POD Conditions
- **PodScheduled**: Indicates whether the pod has been scheduled to a node.
- **Initialized**: Indicates whether the pod has been initialized.
- **ContainersReady**: Indicates whether all containers in the pod are ready.
- **Ready**: Indicates whether the pod is ready to accept traffic.


### Readiness Probe
A readiness probe checks if a pod is ready to handle requests. If the probe fails, the pod will not receive traffic until it passes the readiness check again.
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: readiness-probe-example
spec:
  containers:
  - name: myapp
    image: myapp:latest
    readinessProbe:
      httpGet:
        path: /api/health
        port: 8080
      initialDelaySeconds: 5
      periodSeconds: 10
      failureThreshold: 3
```

### HTTP Get Readiness Probe
```yaml
readinessProbe:
     httpGet:
        path: /api/health
        port: 8080
```

### TCP Socket Readiness Probe
```yaml
readinessProbe:
     tcpSocket:
        port: 8080
```
### Exec Readiness Probe
```yaml
readinessProbe:
     exec:
        command:
        - cat
        - /tmp/healthy
```

## Liveness Probes
Liveness probes are used to determine if a pod is still running. If a liveness probe fails, Kubernetes will restart the pod to restore its functionality.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: liveness-probe-example
spec:
  containers:
  - name: myapp
    image: myapp:latest
    livenessProbe:
      httpGet:
        path: /api/health
        port: 8080
      initialDelaySeconds: 5
      periodSeconds: 10
      failureThreshold: 3
```

### HTTP Get Liveness Probe
```yaml
livenessProbe:
     httpGet:
       path: /api/health
       port: 8080
```

### TCP Socket Liveness Probe
```yaml
livenessProbe:
     tcpSocket:
       port: 8080
```

### Exec Liveness Probe
```yaml
livenessProbe:
     exec:
       command:
       - cat
       - /tmp/healthy
```
