---
layout: default
title: "Deployment Strategy: Canary"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 23
---

# Canary Deployment
Canary deployment is a strategy that allows you to release a new version of an application to a small subset of users before rolling it out to the entire user base. This helps in minimizing the risk of introducing bugs or issues in the production environment. The key steps in a Canary deployment are:
1. **Deploy the New Version**: Deploy the new version of the application alongside the existing version.
2. **Route Traffic**: Route a small percentage of user traffic to the new version while the majority continues to use the old version.
3. **Monitor Performance**: Monitor the performance and stability of the new version. If it performs well, gradually increase the traffic to the new version.
4. **Full Rollout**: Once the new version is confirmed to be stable, route all traffic to it and decommission the old version.

## Example of Canary Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-primary
  labels:
    app: myapp
    type: front-end
spec:
  template:
    metadata:
      name: myapp-pod
      labels:
        version: v1
        app: front-end
    spec:
      containers:
      - name: app-container
        image: myapp-image:1.0
  replicas: 5
  selector:
    matchLabels:
      version: front-end
```

```yaml
# service-definition.yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    version: front-end
```

```yaml
# new version.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-canary
  labels:
    app: myapp
    type: front-end
spec:
  template:
    metadata:
      name: myapp-pod
      labels:
        version: v2
        app: front-end
    spec:
      containers:
      - name: app-container
        image: myapp-image:2.0
  replicas: 1
  selector:
    matchLabels:
      version: front-end
```