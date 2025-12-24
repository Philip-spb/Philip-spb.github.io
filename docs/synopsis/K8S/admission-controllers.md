---
layout: default
title: "Admission Controllers"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 35
---

# Admission Controllers

Admission controllers are plugins that govern and enforce how the cluster is used. They intercept requests to the Kubernetes API server after authentication and authorization, but before the object is persisted in etcd. Admission controllers can modify the incoming requests or reject them based on custom logic.

You can view the list of enabled admission controllers in your cluster by checking the API server configuration:

```shell
kubectl describe pod kube-apiserver-controlplane -n kube-system | grep admission

kubectl exec -it kube-apiserver-controlplane -n kube-system -- kube-apiserver -h | grep 'enable-admission-plugins'
```

Since the kube-apiserver is running as pod you can check the process to see enabled and disabled plugins.

```shell
ps -ef | grep kube-apiserver | grep admission-plugins
```

## Validating and Mutating Admission Controllers

There are two main types of admission controllers:
1. **Mutating Admission Webhooks**: These controllers can modify the incoming object before it is persisted. For example, the `MutatingAdmissionWebhook` allows you to define custom webhooks that can mutate objects.
2. **Validating Admission Webhooks**: These controllers validate the incoming object before it is persisted. For example, the `ValidatingAdmissionWebhook` allows you to define custom webhooks that can validate objects.

## Deploying Webhoook Server

To deploy a webhook server, you typically need to create a Deployment and a Service for the webhook server, and then create the corresponding `MutatingWebhookConfiguration` or `ValidatingWebhookConfiguration` resources.

### Example of webhooks server

https://github.com/kubernetes/kubernetes/blob/v1.13.0/test/images/webhook/main.go

### Configuring Admission Webhook

You can configure admission webhooks by creating `MutatingWebhookConfiguration` or `ValidatingWebhookConfiguration` resources. Here is an example of a `ValidatingWebhookConfiguration`:

```yaml
apiVersion: admissionregistration.k8s.io/v1
kind: ValidatingWebhookConfiguration
metadata:
  name: example-validating-webhook
webhooks:
- name: validate.example.com
  clientConfig:
    service:
    # otherwise you can use `url` field to point to external webhook server
      name: example-webhook-service
      namespace: default
      port: 443
      path: "/validate"
    caBundle: <base64-encoded-CA-cert>
    rules:
    - operations: ["CREATE", "UPDATE"]
      apiGroups: ["apps"]
      apiVersions: ["v1"]
      resources: ["deployments"]
      scope: "Namespaced"
  admissionReviewVersions: ["v1", "v1beta1"]
