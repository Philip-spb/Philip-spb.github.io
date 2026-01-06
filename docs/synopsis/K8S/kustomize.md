---
layout: default
title: "Kustomize"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 39
---

# Kustomize
Kustomize is a tool for customizing Kubernetes configurations. It allows you to customize and manage Kubernetes configurations without modifying the original YAML files directly.

## Key Concepts
- **Kustomization**: A file that defines how to customize Kubernetes resources.
- **Base**: A directory containing base Kubernetes resources.
- **Overlay**: A directory containing customized Kubernetes resources.

## Installing Kustomize
You can install Kustomize by following the instructions on the [official Kustomize website](https://kustomize.io/). Here is a quick example for installing Kustomize on a Linux system:

```shell
curl -s "https://raw.githubusercontent.com/kubernetes-sigs/kustomize/master/hack/install_kustomize.sh" | bash
```

## Example: Creating a Kustomization
You can create a Kustomization file using the following command:
```shell
kustomize create --resources deployment.yaml,service.yaml
```

## Example: Building a Kustomization
You can build a Kustomization using the following command:
```shell
kustomize build .
```

## Example: Applying a Kustomization
You can apply a Kustomization using the following command:
```shell
kustomize build . | kubectl apply -f -
kubectl apply -k .
```

## Kustomization File Example
kustomization.yaml
```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
- deployment.yaml
- service.yaml
patchesStrategicMerge:
- deployment-patch.yaml
images:
- name: my-app
  newTag: v2.0.0
configMapGenerator:
- name: my-config
  literals:
  - key1=value1
  - key2=value2
```

## Example: Directory Structure

```
my-app/
├── base/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── kustomization.yaml
└── overlays/
    ├── dev/
    │   └── kustomization.yaml
    └── prod/
        └── kustomization.yaml
```
In this example, the `base` directory contains the base Kubernetes resources, and the `overlays` directory contains customized resources for different environments (dev and prod).

## Example: Overlay Kustomization
In the `overlays/dev/kustomization.yaml` file, you can specify customizations for the dev environment:
```yaml
bases:
- ../../base
patchesStrategicMerge:
- deployment-patch.yaml
```

This overlay applies a patch to the base deployment for the dev environment.
