---
layout: default
title: "Cluster Roles"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 34
---

# Cluster Roles

ClusterRoles are similar to Roles but are not namespaced and can define permissions across the entire cluster. They are useful for granting access to cluster-wide resources or for defining permissions that should apply to multiple namespaces.

## List of API Resources

```yaml
# List ClusterRoles
kubectl api-resources --namespaced=true 
kubectl api-resources --namespaced=false
```

## Example: Creating a ClusterRole

cluster-admin-role.yaml

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: cluster-admin
rules:
- apiGroups: ["*"] # All API groups
  resources: ["*"] # All resources
  verbs: ["*"]     # All verbs
```

```shell
kubectl create -f cluster-admin-role.yaml
```

### Single line command to create ClusterRole

```shell
kubectl create clusterrole cluster-admin --verb=* --resource=* --api-group=*
```

## Key Differences Between Role and ClusterRole

- **Scope**: Roles are namespaced, while ClusterRoles are cluster-wide.
- **Use Cases**: Roles are used to define permissions within a specific namespace, whereas ClusterRoles are used for cluster-wide permissions or for resources that are not namespaced.

## Example: Creating a ClusterRoleBinding

cluster-admin-role-binding.yaml

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: cluster-admin-binding
subjects:
- kind: User
  name: admin-user
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: ClusterRole
  name: cluster-admin
  apiGroup: rbac.authorization.k8s.io
```

```shell
kubectl create -f cluster-admin-role-binding.yaml
```

### Single line command to create ClusterRoleBinding

```shell
kubectl create clusterrolebinding cluster-admin-binding --clusterrole=cluster-admin --user=admin-user
```
This ClusterRoleBinding grants the user "admin-user" the permissions defined in the "cluster-admin" ClusterRole across the entire cluster.
