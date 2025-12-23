---
layout: default
title: "Role-Based Access Control (RBAC)"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 33
---

# Role-Based Access Control (RBAC)

RBAC is a method of regulating access to computer or network resources based on the roles of individual users within an enterprise. In Kubernetes, RBAC is used to control access to the Kubernetes API.

pod-reader-role.yaml
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
    namespace: default
    name: pod-reader
rules:
- apiGroups: [""] # "" indicates the core API group
  resources: ["pods"]
  verbs: ["get", "watch", "list"]
  resourceNames: [] # Optional: specify particular pod names
```

```shell
kubectl create -f pod-reader-role.yaml
```

### Single line command to create Role

```shell
kubectl create role pod-reader --verb=get,list,watch --resource=pods --namespace=default
```

## Key RBAC Components

- **Role**: Defines a set of permissions within a specific namespace.
- **ClusterRole**: Similar to Role, but applies cluster-wide.
- **RoleBinding**: Grants the permissions defined in a Role to a user or set of users within a specific namespace.
- **ClusterRoleBinding**: Grants the permissions defined in a ClusterRole to a user or set of users cluster-wide.

## Example: Creating a RoleBinding

read-pods-binding.yaml

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
  namespace: default
subjects:
- kind: User
  name: jane
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io
```

```shell
kubectl create -f read-pods-binding.yaml
```

This RoleBinding grants the user "jane" the permissions defined in the "pod-reader" Role within the "default" namespace.

### Single line command to create RoleBinding

```shell
kubectl create rolebinding read-pods --role=pod-reader --user=jane --namespace=default
```

## Viewing RBAC Resources

```shell
# List Roles
kubectl get roles --namespace=default
# List RoleBindings
kubectl get rolebindings --namespace=default
# List ClusterRoles
kubectl get clusterroles
# List ClusterRoleBindings
kubectl get clusterrolebindings
```

## Chacking Access
You can check what actions a user can perform using the `kubectl auth can-i` command
```shell
kubectl auth can-i get pods --as=jane --namespace=default
```

## Performing Actions as a Specific User
You can perform actions as a specific user using the `--as` flag with `kubectl` commands. For example, to list pods as the user "jane":
```shell
kubectl get pods --as=jane --namespace=default
```
