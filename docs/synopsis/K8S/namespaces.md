---
layout: default
title: "Namespaces"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 6
---

# Namespaces
Namespaces in Kubernetes are a way to divide cluster resources between multiple users or teams. They provide a mechanism for isolating resources and managing access control.

## Example Namespace Definition
```yaml
apiVersion: v1
kind: Namespace
metadata: 
  name: dev
```

## Example Pod within a Namespace
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  namespace: dev
  labels:
    app: myapp
    type: front-end
spec:
  containers:
  - name: nginx-container
    image: nginx
```

## Creating a Namespace
To create a new namespace, you can use the following command:
```bash
kubectl create namespace dev
```

## Listing Namespaces
To list all namespaces in the cluster, use:
```bash
kubectl get namespaces
```

## Deleting a Namespace
To delete a namespace and all its resources, use:
```bash
kubectl delete namespace dev
```
This command will remove the specified namespace and all resources associated with it.  Be cautious when using this command, as it will permanently delete all resources within the namespace.


## Switching Context to a Namespace
To switch the current context to a specific namespace, you can use:
```bash
kubectl config set-context $(kubectl config current-context) --namespace=dev
```
This command sets the current context to the specified namespace, allowing you to work within that namespace without needing to specify it in every command.


## Accessing Resources in a Namespace
When accessing resources within a specific namespace, you can use the `-n` or `--namespace` flag:
```bash
kubectl get pods -n dev  # --namespace dev
```
This command lists all pods in the `dev` namespace. You can replace `pods` with any other resource type, such as `services`, `deployments`, etc.

```bash
kubectl get pods --all-namespaces  # -A
```
This command lists all pods across all namespaces in the cluster.


## Resource Quotas in Namespaces
You can set resource quotas for a namespace to limit the amount of resources (CPU, memory, etc.) that can be used by the resources within that namespace. Here is an example of a resource quota definition:
```yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: compute-quota
  namespace: dev
spec:
  hard:
    pods: "10"
    requests.cpu: "4"
    requests.memory: "5Gi"
    limits.cpu: "10"
    limits.memory: "10Gi"
```
This example sets a resource quota for the `dev` namespace, limiting the total CPU and memory requests and limits for all resources within that namespace.

```bash
kubectl create -f resource-quota.yaml
```
This command creates the resource quota defined in the `resource-quota.yaml` file.