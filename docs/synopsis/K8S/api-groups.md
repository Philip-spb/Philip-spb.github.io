---
layout: default
title: "API Groups"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 32
---

# API Groups in Kubernetes
Kubernetes API is organized into multiple API groups, which allow for better organization and versioning of resources. Each API group contains a set of related resources and has its own endpoint in the Kubernetes API server.

## Core API Group
The Core API group, also known as the legacy API group, includes fundamental resources such as Pods, Services, and Namespaces. These resources are accessible via the `/api/v1/` endpoint

## Named API Groups
Named API groups include resources that are grouped based on their functionality. Some common named API groups are:
- **apps**: Contains resources related to application deployment and management, such as Deployments, StatefulSets, and DaemonSets. Accessible via `/apis/apps/v1/`.
- **batch**: Contains resources for batch processing, such as Jobs and CronJobs. Accessible via `/apis/batch/v1/`.
- **extensions**: Contains resources that extend the core functionality of Kubernetes, such as Ingress and NetworkPolicies. Accessible via `/apis/extensions/v1beta1/`.
- **rbac.authorization.k8s.io**: Contains resources for role-based access control (RBAC), such as Roles and RoleBindings. Accessible via `/apis/rbac.authorization.k8s.io/v1/`.

## Example: Listing API Groups
You can list all available API groups in your Kubernetes cluster using the following `kubectl` command
```shell
kubectl api-versions
```

### Example: Accessing API Groups via Proxy

```sh
# Start the proxy
kubectl proxy 8001&
# List API groups
curl localhost:8001/apis
```

## Kube API Server settings

You can check settings by running the following command:
```shell
kubectl describe pod kube-apiserver-controlplane -n kube-system
```
