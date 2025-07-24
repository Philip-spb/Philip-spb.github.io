---
layout: default
title: "Node Affinity"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 15
---

# Node Affinity
Node affinity is a set of rules used by Kubernetes to determine which nodes a pod can be scheduled on based on labels assigned to the nodes. It allows you to constrain which nodes your pod is eligible to be scheduled based on labels on the node.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
  - name: mycontainer
    image: myimage
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: size
            operator: In # NotIn, NotExists, Exists, Gt, Lt
            values:
            - Large
            - Medium
```

## Node Affinity Types
There are two types of node affinity:

1. **RequiredDuringSchedulingIgnoredDuringExecution**: This type of affinity is mandatory for scheduling. If the node does not meet the criteria, the pod will not be scheduled on that node.

2. **PreferredDuringSchedulingIgnoredDuringExecution**: This type of affinity is preferred but not mandatory. If the node does not meet the criteria, the pod may still be scheduled on that node, but Kubernetes will try to find a more suitable node first.
