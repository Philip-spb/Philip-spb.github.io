---
layout: default
title: "Custom Resource Definition (CRD)"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 37
---

# Custom Resource Definition (CRD)

Custom Resource Definitions (CRDs) allow you to extend the Kubernetes API by defining your own resource types. This enables you to create, manage, and interact with custom resources in a similar way to built-in Kubernetes resources.

## Creating a Custom Resource Definition
crd-example.yaml

```yaml
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: internals.datasets.kodekloud.com 
spec:
  group: datasets.kodekloud.com
  versions:
    - name: v1
      served: true
      storage: true
      schema:
        openAPIV3Schema:
          type: object
          properties:
            spec:
              type: object
              properties:
                internalLoad:
                  type: string
                range:
                  type: integer
                percentage:
                  type: string
  scope: Namespaced 
  names:
    plural: internals
    singular: internal
    kind: Internal
    shortNames:
    - int
```

```shell
kubectl apply -f crd-example.yaml
```

## Using Custom Resources
Once the CRD is created, you can create instances of your custom resource:
foo-instance.yaml
```yaml
apiVersion: datasets.kodekloud.com/v1
kind: Internal
metadata:
  name: foo
spec:
  internalLoad: high
  range: 100
  percentage: "75%"
```

## Creating a Custom Resource Instance

```shell
kubectl apply -f foo-instance.yaml
```

## Viewing Custom Resources
```shell
kubectl get internals
kubectl get internal foo -o yaml
```

## Deleting a Custom Resource Definition
```shell
kubectl delete crd internals.datasets.kodekloud.com
```
This command will delete the CRD along with all instances of the custom resource.

## Custom Controllers

To manage the lifecycle of custom resources, you can create custom controllers that watch for changes to these resources and take appropriate actions. This typically involves writing code that interacts with the Kubernetes API using client libraries.

## Example: Accessing API Groups and Versions
You can check the available API groups and their versions in your Kubernetes cluster using the following `kubectl` commands:

```shell
kubectl api-versions
```

### Example custom controller

[sample-controller](https://github.com/kubernetes/sample-controller)

```shell
git clone https://github.com/kubernetes/sample-controller.git
cd sample-controller
go build -o sample-controller .
./sample-controller -kubeconfig=<path-to-kubeconfig>
```

This example demonstrates how to create and manage custom resources in Kubernetes using Custom Resource Definitions (CRDs). You can further enhance this by implementing custom controllers to automate the management of these resources.

## Operator Framework

The Operator Framework is a set of tools and libraries that simplify the process of building, testing, and packaging Kubernetes operators. Operators are a way to package, deploy, and manage a Kubernetes application.

[list of operators](https://operatorhub.io/)
You can use the Operator SDK to create your own operators for managing custom resources.

```shell
operator-sdk init --domain=example.com --repo=github.com/example/memcached-operator
operator-sdk create api --group=cache --version=v1alpha1 --kind=Memcached --resource --controller
```

This will make a new operator project with the necessary files and directories to get started.
