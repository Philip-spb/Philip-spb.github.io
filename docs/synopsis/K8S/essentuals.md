---
layout: default
title: "Basic Information"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 1
---

# Basic Information

Summary of the course [Kubernetes Certified Application Developer (CKAD) with Tests](https://www.udemy.com/course/certified-kubernetes-application-developer/).

Kubernetes official documentation: [Kubernetes Documentation](https://kubernetes.io/docs/home/)


## Formatting Output with kubectl
To format the output of `kubectl` commands, you can use the `-o` or `--output` flag followed by the desired output format. Common output formats include:

- `json`: Outputs the resource in JSON format.
- `yaml`: Outputs the resource in YAML format.
- `wide`: Outputs additional information in a table format.

### Example: Get Pods in YAML Format
```bash
kubectl get pods -o yaml
```

### Example: Get Services in JSON Format
```bash
kubectl get services -o json
```

### Example: Get Nodes in Wide Format
```bash
kubectl get nodes -o wide
```

### watch
To continuously watch for changes in resources, you can use the `--watch` or `-w` flag. This will keep the command running and update the output as changes occur.
```bash
kubectl get pods --watch
```
