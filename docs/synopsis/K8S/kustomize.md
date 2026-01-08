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
- db/  # this is just an example of including a directory as a resource
- api/
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

## Transforming Resources
Kustomize allows you to transform resources using various transformers, such as:

- **commonLabels**: Adds common labels to all resources.
- **namePrefix**: Adds a prefix to resource names.
- **nameSuffix**: Adds a suffix to resource names.
- **namespace**: Sets the namespace for all resources.
- **commonAnnotations**: Adds common annotations to all resources.

### Example: Common Labels Transformer

db-service.yaml
```yaml
apiVersion: v1
kind: Service
metadata:
    name: db-service
    labels:
        org: myorg
spec:
    selector:
        org: myorg
    ports:
    - protocol: TCP
      port: 5432
      targetPort: 5432
```

kustomization.yaml
```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
resources:
- db-service.yaml
commonLabels:
  org: myorg
```

In this example, the `commonLabels` transformer adds the label `org: myorg` to all resources defined in the Kustomization file.

### Example: Name Prefix and Name Suffix Transformer

kustomization.yaml
```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
resources:
- deployment.yaml
namePrefix: dev-
```

kustomization.yaml
```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
resources:
- deployment.yaml
nameSuffix: -v1
```


### Example: Image Transformer

kustomization.yaml
```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
resources:
- deployment.yaml
images:
- name: web
  newTag: nginx
```

kustomization.yaml
```yaml
images:
- name: ngnix
  newName: haproxy
```

In this example, the `images` transformer updates the image tag for the `my-app` container in the deployment resource.

Instead of using newName we can also use newTag to update only the tag of the image.

kustomization.yaml
```yaml
images:
- name: ngnix
  newTag: 1.19
```

Also we can use both newName and newTag together to update both the image name and tag.
kustomization.yaml
```yaml
images:
- name: ngnix
  newName: haproxy
  newTag: 2.0
```
This will change the image from `ngnix:<old-tag>` to `haproxy:2.0`.
