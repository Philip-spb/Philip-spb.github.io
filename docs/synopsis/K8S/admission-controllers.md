---
layout: default
title: "Admission Controllers"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 35
---

# Admission Controllers

Admission controllers are plugins that govern and enforce how the cluster is used. They intercept requests to the Kubernetes API server after authentication and authorization, but before the object is persisted in etcd. Admission controllers can modify the incoming requests or reject them based on custom logic.

You can view the list of enabled admission controllers in your cluster by checking the API server configuration:

```shell
kubectl describe pod kube-apiserver-controlplane -n kube-system | grep admission

kubectl exec -it kube-apiserver-controlplane -n kube-system -- kube-apiserver -h | grep 'enable-admission-plugins'
```

Since the kube-apiserver is running as pod you can check the process to see enabled and disabled plugins.

```shell
ps -ef | grep kube-apiserver | grep admission-plugins
```
