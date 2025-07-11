---
layout: default
title: "Secrets"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 10
---

# secrets
## Create a Secret from Literal Values

```bash
kubectl create secret generic my-secret --from-literal=username=myuser --from-literal=password=mypassword
```
This command creates a Secret named `my-secret` with the specified username and password.
## Create a Secret from a File

```bash
kubectl create secret generic my-secret --from-file=ssh-privatekey=/path/to/private/key
```
This command creates a Secret named `my-secret` from a file containing a private SSH key.

## Create a Secret from a YAML Definition
secret-data.yaml
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: my-secret
type: Opaque
data:
  username: bXl1c2Vy
  password: bXlwYXNzd29yZA==
```
This YAML file defines a Secret named `my-secret` with the specified username and password.

```
kubectl create -f secret-data.yaml
```

```bash
echo -n "myuser" | base64 # Output: bXl1c2Vy
echo -n "mypassword" | base64 # Output: bXlwYXNzd29yZA==
```

## Secret in Pod Definition
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
    - secretRef:
        name: my-secret
```
This Pod definition uses the Secret `my-secret` to populate environment variables in the container.

### Env
```yaml
envFrom:
- secretRef:
    name: my-secret
```

### Single Env
```yaml
env:
- name: USERNAME
  valueFrom:
    secretKeyRef:
      name: my-secret
      key: username
```

### Volume
```yaml
volumes:
- name: secret-volume
  secret:
    secretName: my-secret
```
