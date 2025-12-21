---
layout: default
title: "KubeConfig"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 31
---

# KubeConfig

KubeConfig is a configuration file used by kubectl and other Kubernetes clients to access Kubernetes clusters. It contains information about clusters, users, contexts, and namespaces.

## KubeConfig Structure
A typical KubeConfig file is structured in YAML format and contains the following sections:
- **clusters:** Contains information about the Kubernetes clusters, including the cluster name, server URL, and certificate authority data.
- **users:** Contains information about the users, including user names and authentication methods (e.g., tokens, client certificates).
- **contexts:** Defines the context for accessing a cluster, which includes the cluster, user, and namespace to use.
- **current-context:** Specifies the default context to use when accessing the cluster.

## Kubeconfig File

The default location of the KubeConfig file is `~/.kube/config`. You can specify a different KubeConfig file using the `KUBECONFIG` environment variable or the `--kubeconfig` flag with kubectl commands.

```shell
kubectl --kubeconfig /path/to/your/kubeconfig get pods
```

```yaml
apiVersion: v1
kind: Config
clusters:
- name: my-kube-playground
  cluster:
    server: https://kube-playground.example.com
    certificate-authority: /path/to/ca.crt

contexts:
- name: my-kube-admin@my-kube-playground
  context:
    cluster: my-kube-playground
    user: my-kube-admin
    namespace: default

users:
- name: my-kube-admin
  user:
    client-certificate: admin.crt
    client-key: admin.key
```

## CLI Commands

You can use the following kubectl commands to manage and view your KubeConfig settings:

```shell
kubectl config view

kubectl config view --kubeconfig /path/to/your/kubeconfig

kubectl config use-context my-kube-admin@my-kube-playground
```

## Setting default KubeConfig file
You can set the `KUBECONFIG` environment variable to point to your desired KubeConfig file:

```shell
export KUBECONFIG=/path/to/your/kubeconfig
```
This will make kubectl use the specified KubeConfig file by default.
