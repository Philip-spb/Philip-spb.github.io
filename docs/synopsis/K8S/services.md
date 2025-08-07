---
layout: default
title: "Services"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 25
---

# Services in Kubernetes
Kubernetes Services are an abstraction that defines a logical set of pods and a policy by which to access them. This is useful for exposing applications running in pods to other applications or external traffic.

## Types of Services
Kubernetes supports several types of services, each serving a different purpose:
- **ClusterIP**: The default type, which exposes the service on a cluster-internal IP. This means the service is only accessible within the cluster.
- **NodePort**: Exposes the service on each node's IP at a static port. This allows external traffic to access the service by requesting `<NodeIP>:<NodePort>`.
- **LoadBalancer**: Creates an external load balancer in supported cloud providers, which routes traffic to the service.
- **ExternalName**: Maps the service to the contents of the `externalName` field (e.g., a DNS name), allowing you to access external services.

## Example of a NodePort Service
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-nodeport-service
spec:
  type: NodePort
  selector:
    app: my-app  # Select pods with this label
  ports:
  - port: 80
    targetPort: 8080
    nodePort: 30007
```

```shell
# Create the NodePort service
kubectl apply -f my-nodeport-service.yaml
# Get the details of the service
kubectl get services
# Access the service from outside the cluster
curl http://<NodeIP>:30007
```

## Example of a ClusterIP Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-clusterip-service
spec:
  type: ClusterIP
  selector:
    app: my-app
  ports:
  - port: 80
    targetPort: 8080
```

```shell
# Create the ClusterIP service
kubectl apply -f my-clusterip-service.yaml
# Get the details of the service
kubectl get services
# Access the service from within the cluster
kubectl exec -it <pod-name> -- curl http://my-clusterip-service:80
```
