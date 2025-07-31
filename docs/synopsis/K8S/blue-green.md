---
layout: default
title: "Deployment Strategy: Blue-Green"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 22
---

# Blue-Green Deployment
Blue-Green deployment involves maintaining two separate environments: Blue (the current production environment) and Green (the new version of the application). The key steps in a Blue-Green deployment are:
1. **Prepare the Green Environment**: Deploy the new version of the application to the Green environment while the Blue environment is still serving traffic.
2. **Switch Traffic**: Once the Green environment is ready and tested, switch the traffic from Blue to Green. This can be done by updating the service to point to the Green environment.
3. **Monitor and Rollback**: Monitor the Green environment for any issues. If problems arise, you can quickly switch back to the Blue environment, minimizing downtime and impact on users. 
4. **Clean Up**: After a successful deployment and monitoring period, you can clean up the Blue environment or prepare it for the next deployment.

## Example of Blue-Green Deployment

```yaml
# myapp-blue.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-blue
  labels:
    app: myapp
    version: front-end
spec:
  template:
    metadata:
      name: myapp-pod
      labels:
        version: v1
    spec:
      containers:
      - name: app-container
        image: myapp-image:1.0
  replicas: 5
  selector:
    matchLabels:
      version: v1
```

```yaml
# service-definition.yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    version: v1
```

```yaml
# myapp-green.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-green
  labels:
    app: myapp
    version: front-end
spec:
  template:
    metadata:
      name: myapp-pod
      labels:
        version: v2
    spec:
      containers:
      - name: app-container
        image: myapp-image:2.0
  replicas: 5
  selector:
    matchLabels:
      version: v2
```

## Switching Traffic
To switch traffic from the Blue environment to the Green environment, you can update the service selector:

```yaml
# Update service to point to the Green environment
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    version: v2
```

```shell
kubectl apply -f service-definition.yaml
```