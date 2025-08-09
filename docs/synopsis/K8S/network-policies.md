---
layout: default
title: "Network policies"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 26
---

# Network Policies in Kubernetes
Network policies in Kubernetes are used to control the traffic flow between pods and services. They allow you to define rules that specify which pods can communicate with each other, enhancing security and isolation within the cluster

```shell
# List all network policies in the current namespace
kubectl get networkpolicies
```

## Example of a Network Policy
```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: db-policy
spec:
  podSelector:
    matchLabels:
      app: db
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          role: api-pod
      namespaceSelector:  # Select pods from a specific namespace traffic is allowed to reach db pod
        matchLabels:
          name: prod
    - ipBlock:  # Allow traffic from a specific IP range
        cidr: 192.168.1.0/24
    ports:
    - protocol: TCP
      port: 3306
```

## Egress example
```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: egress-policy
spec:
  podSelector:
    matchLabels:
      app: myapp
  policyTypes:
  - Egress
  egress:
  - to:
    - podSelector:
        matchLabels:
          role: db-pod
      namespaceSelector:  # Select pods from a specific namespace traffic is allowed to reach db pod
        matchLabels:
          name: prod
    - ipBlock:  # Allow traffic to a specific IP range
        cidr: 192.168.1.0/24
    ports:
    - protocol: TCP
      port: 3306
```

### Example multiple egress rules
```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: internal-policy
spec:
  policyTypes:
  - Egress
  egress:
  - to:
    - podSelector:
        matchLabels:
          name: payroll
    ports:
    - protocol: TCP
      port: 8080
  - to:
    - podSelector:
        matchLabels:
          name: mysql
    ports:
    - protocol: TCP
      port: 3306
```
