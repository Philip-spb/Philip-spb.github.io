---
layout: default
title: "Service Account"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 12
---

# Service Account
Service accounts in Kubernetes are used to provide an identity for processes that run in a Pod. They are primarily used for API access and can be associated with Pods to allow them to interact with the Kubernetes API server.

## Creating a Service Account

```shell
# To create a service account named 'myapp-serviceaccount'
kubectl create serviceaccount myapp-serviceaccount
```

```shell
# To create a service account and generate a token with a specific name
kubectl create serviceaccount myapp-serviceaccount --token=myapp-token

# To create token for an existing service account  
kubectl create token myapp-serviceaccount
```

```shell
# To view all service accounts in the current namespace
kubectl get serviceaccounts
```

```shell
# To view the details of the service account
kubectl describe serviceaccount myapp-serviceaccount
```

```shell
# To view the secret associated with the service account
kubectl describe secret myapp-serviceaccount-token-abc123
```

```shell
curl -k https://<kubernetes-api-server>/api/ -insecure -H "Authorization: Bearer <service-account-token>"
```

## Service Account Definition
Service accounts can be defined in a YAML file. Here is an example of a service account definition:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: myapp-serviceaccount
```

## Using Service Account in Pod Definition

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
spec:
  serviceAccountName: myapp-serviceaccount
  containers:
  - name: myapp-container
    image: myapp-image
```

## Automount Service Account Token
By default, Kubernetes automatically mounts the service account token into Pods. If you want to disable this behavior, you can set the `automountServiceAccountToken` field to `false` in the Pod specification:  

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
spec:
  serviceAccountName: myapp-serviceaccount
  automountServiceAccountToken: false
  containers:
  - name: myapp-container
    image: myapp-image
```
