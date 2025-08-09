---
layout: default
title: "Ingress Networking"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 27
---

# Ingress Networking in Kubernetes
Ingress in Kubernetes is a collection of rules that allow inbound connections to reach the cluster services. It provides a way to expose HTTP and HTTPS routes from outside the cluster to services within the cluster.

## Ingress Controller
An Ingress Controller is a specialize d load balancer that manages the routing of external traffic to the appropriate services based on the Ingress rules defined. Common Ingress Controllers include NGINX, Traefik, and HAProxy.

### Deployment
```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: nginx-ingress-controller
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /  # Rewrite target for the Ingress
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx-ingress
  template:
    metadata:
      labels:
        app: nginx-ingress
    spec:
      containers:
      - name: nginx-ingress-controller
        image: quay.io/kubernetes-ingress-controller/nginx-ingress-controller:0.30.0
      args:
        - /nginx-ingress-controller
        - --configmap=$(POD_NAMESPACE)/nginx-configuration
      env:
        - name: POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: POD_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
      ports:
      - containerPort: 80
        name: http
      - containerPort: 443
        name: https
```

### Service
```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-ingress-service
spec:
  type: nodePort
  selector:
    app: nginx-ingress
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
    nodePort: 30080
  - port: 443
    targetPort: 443
    protocol: TCP
    nodePort: 30443
```

### ConfigMap
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx-configuration
```

### Auth
```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: nginx-ingress-serviceaccount
``` 
        
## Example Ingress Resource

```yaml
# ingress-wear.yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: ingress-wear
spec:
  backend:
    serviceName: wear-service
    servicePort: 80
```

```shell
kubectl create -f ingress-wear.yaml

# Check the Ingress resource
kubectl get ingress
# Access the service via the Ingress controller
curl http://<NodeIP>:30080/wear
```

### Way 1
```yaml
# ingress-wear-watch.yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata: 
  name: ingress-wear-watch
spec:
  rules:
  - http:
      paths:
      - path: /wear
        backend:
          serviceName: wear-service
          servicePort: 80
      - path: /watch
        backend:
          serviceName: watch-service
          servicePort: 80
```

```shell
kubectl create -f ingress-wear-watch.yaml
kubectl describe ingress ingress-wear-watch
# Access the services via the Ingress controller
curl http://<NodeIP>:30080/wear
curl http://<NodeIP>:30080/watch
```


### Way 2
```yaml
# ingress-wear-watch.yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata: 
  name: ingress-wear-watch
spec:
  rules:
  - host: wear.my-online-store.com
    http:
      paths:
        - backend:
          serviceName: wear-service
          servicePort: 80
  - host: watch.my-online-store.com
    http:
      paths:
        - backend:
          serviceName: watch-service
          servicePort: 80
```

## Imperative Way

*Format:*
```shell
kubectl create ingress <ingress-name> --rule="host/path=service:port"
```

*Example:*
```shell
kubectl create ingress ingress-test --rule="wear.my-online-store.com/wear*=wear-service:80"
```
