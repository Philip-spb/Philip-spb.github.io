---
layout: default
title: "Docker Image"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 8
---

# Docker Image

Dockerfile
```dockerfile
FROM UBUNTU

RUN apt-get update
RUN apt-get install python

RUN pip install flask
RUN pip install flask-mysql

COPY . /opt/sourcecode

ENTRYPOINT FLASK_APP=/opt/sourcecode/app.py flask run
```
This Dockerfile creates a Docker image based on Ubuntu, installs Python and Flask, and copies the source code into the image. The `ENTRYPOINT` command sets the Flask application to run when the container starts.

```bash
# Build and push the Docker image
docker build -f Dockerfile -t philipspb/my-custom-image .
docker push philipspb/my-custom-image
```
This command builds the Docker image using the specified Dockerfile and tags it as `philipspb/my-custom-image`. The `docker push` command uploads the image to the Docker registry.

## Comand and arguments in Kubernetes

### Dockerfile
```dockerfile
FROM ubuntu:latest

ENTRYPOINT ["sleep"]

CMD ["10"]
```
This Dockerfile creates a Docker image based on the latest Ubuntu image. The `ENTRYPOINT` specifies the command to run when the container starts, which is `sleep`. The `CMD` provides the default argument for the `ENTRYPOINT`, which is `10`. This means that when the container is run, it will execute `sleep 10`, causing the container to sleep for 10 seconds before exiting.

### Kubernetes Pod Definition
```yaml
apiVersion: v1
kind: Pod
metadata:
    name: ubuntu-sleeper-pod
spec:
    containers:
    - name: ubuntu-sleeper
      image: ubuntu-sleeper
        command: ["sleep2.0"]
        args: ["10"]
```
This YAML file defines a Pod that runs an Ubuntu container. The `command` and `args` fields specify the command to run inside the container. In this case, it runs `sleep 10`, which means the container will sleep for 10 seconds before exiting.

```bash
kubectl run ubuntu-sleeper-pod --image=ubuntu-sleeper --command sleep2.0 -- 10
```
This command creates the same Pod as defined in the YAML file. The `--command` flag indicates that the command to run is specified, and `sleep2.0 10` is the command and its argument. This will create a Pod named `ubuntu-sleeper-pod` that runs the `sleep` command for 10 seconds.