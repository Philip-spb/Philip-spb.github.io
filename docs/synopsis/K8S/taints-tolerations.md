---
layout: default
title: "Taints and Tolerations"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 14
---

# Taints and Tolerations

Taints and tolerations are used in Kubernetes to control which pods can be scheduled on which nodes. Taints are applied to nodes, while tolerations are applied to pods.

```shell
# To add a taint to a node
kubectl taint nodes <node-name> key=value:taint-effect
# example
kubectl taint nodes node01 spray=mortein:NoSchedule

# To remove a taint from a node
kubectl taint nodes <node-name> key:taint-effect-
# example
kubectl taint nodes node01 spray=mortein:NoSchedule-
```

## Taint effects
Taint-effect can be NoSchedule, PreferNoSchedule, or NoExecute

**NoSchedule:** Pods that do not tolerate the taint will not be scheduled on the node.

**PreferNoSchedule:** Kubernetes will try to avoid scheduling pods that do not tolerate the taint, but it is not guaranteed

**NoExecute:** Pods that do not tolerate the taint will be evicted from the node if they are already running.



## Tolerations
Tolerations are applied to pods to allow them to be scheduled on nodes with specific taints.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
  - name: mycontainer
    image: myimage
  tolerations:
  - key: "key"
    operator: "Equal"
    value: "value"
    effect: "NoSchedule"
```

## Viewing Taints and Tolerations
```shell
# To view taints on a node
kubectl describe node kubemaster | grep Taints

# To view tolerations on a pod
kubectl describe pod mypod | grep Tolerations
```

## Node Selector
You can also use node selectors to control pod scheduling based on labels applied to nodes. This is a simpler mechanism compared to taints and tolerations. 

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
  - name: mycontainer
    image: myimage
  nodeSelector:
    size: Large
```
This will schedule the pod on nodes that have the label `size=Large`.

## Label Nodes
You can label nodes to use them in node selectors.

```shell
# To label a node
kubectl label nodes <node-name> key=value
# example
kubectl label nodes node01 size=Large
```
