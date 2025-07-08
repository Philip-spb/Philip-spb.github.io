---
layout: default
title: "ConfigMaps"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 9
---

# ConfigMaps

## Environment Variables

```yaml
apiVersion: v1
kind: Pod
metadata:
    name: myapp-pod
spec:
    containers:
    - name: myapp-container
        image: myapp-image
        env:
        - name: APP_COLOR
            value: blue
        - name: APP_MODEL
            value: prod
```

## ConfigMap Definition
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-config
data:
  APP_COLOR: blue
  APP_MODEL: prod
```

## Using ConfigMap in Pod Definition

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
spec:
  containers:
  - name: myapp-container
    image: myapp-image
    envFrom:
    - configMapRef: 
        name: myapp-config
```
## Commands
```bash
# Create ConfigMap
kubectl create configmap myapp-config --from-literal=APP_COLOR=blue --from-literal=APP_MODEL=prod

# View ConfigMap
kubectl get configmap myapp-config -o yaml

# Delete ConfigMap
kubectl delete configmap myapp-config
# Update ConfigMap
kubectl create configmap myapp-config --from-literal=APP_COLOR=red --from-literal=APP_MODEL=prod -o yaml --dry-run=client | kubectl apply -f -

# Extract ConfigMap from file
kubectl create configmap myapp-config --from-file=myapp-config.yaml
```

## View ConfigMaps
```bash
kubectl get configmaps
```

## Config Map in Pod

### Env
```yaml
envFrom:
    - configMapRef:
        name: myapp-config
```

### Single Env
```yaml
env:    
    - name: APP_COLOR
      valueFrom:
        configMapKeyRef:
          name: myapp-config
          key: APP_COLOR
```

### Volume
```yaml
volumes:    
    - name: config-volume
      configMap:
        name: myapp-config
```
