---
layout: default
title: "API Versions"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 36
---

# API Versions

Kubernetes API versions indicate the stability and maturity of the API resources. Each API resource is associated with a specific version, which helps users understand the level of support and potential changes in future releases.

## Common API Versions
- **v1**: Stable and generally available for production use. Resources in this version have been thoroughly tested and are considered reliable.
- **v1beta1**: Beta version, which means the resource is still under development and may undergo changes. It is not recommended for production use, but can be used for testing and experimentation.
- **v1alpha1**: Alpha version, which is an early release of the resource. It is highly experimental and may change significantly in future releases. Not suitable for production use. 
## Example: Checking API Versions

You can check the available API versions in your Kubernetes cluster using the following `kubectl` command
```shell
kubectl api-versions
```

## Kubectl Convert Command

The `kubectl convert` command allows you to convert Kubernetes resource manifests between different API versions. This is useful when you need to upgrade or downgrade resources to match the API version supported by your cluster.

```shell
kubectl convert -f <input-file.yaml> --output-version=<desired-api-version>
```

## Example: Converting a Deployment Manifest
```shell
kubectl convert -f deployment-v1beta1.yaml --output-version=apps/v1 | kubectl apply -f -
```

This command takes a Deployment manifest in the `v1beta1` version and converts it to the `apps/v1` version.


### Installing kube-convert

```shell
curl -LO https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl-convert
chmod +x kubectl-convert 
mv kubectl-convert /usr/local/bin/kubectl-convert
```
