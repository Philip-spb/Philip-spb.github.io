---
layout: default
title: "Security Contexts"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 11
---

# Security Contexts

Security contexts in Kubernetes define privilege and access control settings for a Pod or Container. They allow you to specify security-related configurations such as user IDs, group IDs, capabilities, and more.

## Pod Security Context

A Pod security context is defined at the Pod level and applies to all containers within the Pod. It is specified under the `spec` field of the Pod definition.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
spec:
  securityContext:
    runAsUser: 1000
    runAsGroup: 3000
    fsGroup: 2000
  containers:
  - name: myapp-container
    image: myapp-image
```

## Container Security Context

A Container security context is defined at the container level and overrides the Pod security context settings for that specific container. It is specified under the `containers` field of the Pod definition.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
spec:
  containers:
  - name: myapp-container
    image: myapp-image
    securityContext:
      runAsUser: 1001
      capabilities:
        add: ["NET_ADMIN"]  # Capabilities are only supported at the container level and not at the Pod level
```

## Common Security Context Settings

- `runAsUser`: Specifies the user ID to run the container as.
- `runAsGroup`: Specifies the group ID to run the container as.
- `fsGroup`: Specifies the group ID for the filesystem.
- `capabilities`: Adds or drops Linux capabilities for the container.

```yaml
securityContext:
  runAsUser: 1000
  runAsGroup: 3000
  fsGroup: 2000
  capabilities:
    add: ["NET_ADMIN"]
    drop: ["NET_RAW"]
```
