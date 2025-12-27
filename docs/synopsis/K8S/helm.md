---
layout: default
title: "HELM"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 38
---

# HELM
Helm is a package manager for Kubernetes that helps you define, install, and manage Kubernetes applications. It uses a packaging format called charts, which are collections of files that describe a related set of Kubernetes resources.

[Artifact Hub](https://artifacthub.io)

```shell
helm search hub wordpress
```

## Key Concepts
- **Chart**: A Helm package that contains all the resource definitions necessary to run an application, tool, or service inside a Kubernetes cluster.
- **Release**: An instance of a chart running in a Kubernetes cluster. You can have multiple releases of the same chart with different configurations.
- **Repository**: A collection of Helm charts that can be shared and distributed.

## Example: Searching for a Chart
You can search for Helm charts in a repository using the following command:
```shell
helm search repo <chart-name>
```

## Example: Installing Helm
You can install Helm by following the instructions on the [official Helm website](https://helm.sh/docs/intro/install/). Here is a quick example for installing Helm on a Linux system:

```shell
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

## Example: Adding a Helm Repository
You can add a Helm repository using the following command:

```shell
helm repo add stable https://charts.helm.sh/stable
helm repo update
```

## Example: Pull a Chart
You can pull a Helm chart from a repository using the following command:

```shell
helm pull --untar stable/nginx  # Pulls the chart locally
```

## Example: Installing a Chart
You can install a Helm chart using the following command:

```shell
helm install my-release stable/nginx
```

This command installs the NGINX chart from the stable repository and names the release "my-release".

## Example: Uninstalling a Release
You can uninstall a Helm release using the following command:
```shell
helm uninstall my-release
```
