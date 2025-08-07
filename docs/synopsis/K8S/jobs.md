---
layout: default
title: "Jobs"
grand_parent: "Конспекты"
parent: "K8S"
nav_order: 24
---

# Kubernetes Jobs
Kubernetes Jobs are used to run batch processes or tasks that need to be completed once, such as data processing, backups, or any other one-time tasks. They ensure that a specified number of pods successfully terminate their execution.
## Key Features of Jobs
- **Completion**: Jobs ensure that a specified number of pods successfully terminate their execution.
- **Parallelism**: Jobs can run multiple pods in parallel, allowing for efficient processing of tasks.
- **Retries**: If a pod fails, the Job controller can retry the pod until the specified number of completions is achieved.
- **Cleanup**: Jobs can be configured to clean up completed pods automatically.
## Example of a Job
```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: math-add-job
spec:
  completions: 3 # Number of successful completions required
  template:
    spec:
      containers:
      - name: math-add
        image: ubuntu
        command: ["expr", "3", "+", "2"]
      restartPolicy: Never
```

```shell
# Create the job
kubectl apply -f math-add-job.yaml
# Check the status of the job
kubectl get jobs
# View the logs of the job's pod
kubectl logs job/math-add-job
# Clean up the job after completion
kubectl delete job math-add-job
# Delete all completed jobs
kubectl delete jobs --field-selector status.successful=1
```

## Parallel Jobs
You can run jobs in parallel by specifying the `parallelism` field in the job specification.
```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: parallel-job
spec:
  parallelism: 5 # Number of pods to run in parallel
  completions: 10 # Total number of successful completions required
  template:
    spec:
      containers:
      - name: parallel-task
        image: ubuntu
        command: ["sh", "-c", "echo Hello from pod $HOSTNAME"]
      restartPolicy: Never
``` 

```shell
# Create the parallel job
kubectl apply -f parallel-job.yaml
# Check the status of the parallel job
kubectl get jobs
# View the logs of the parallel job's pods
kubectl logs job/parallel-job --all-containers=true
# Clean up the parallel job after completion
kubectl delete job parallel-job
```

## CronJobs
Kubernetes also supports CronJobs, which allow you to run jobs on a scheduled basis, similar to cron jobs in Unix/Linux systems.
```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: daily-backup
spec:
  schedule: "0 2 * * *" # Run daily at 2 AM
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: backup
            image: ubuntu
            command: ["sh", "-c", "echo Backup started at $(date)"]
          restartPolicy: OnFailure
```

```shell
# Create the CronJob
kubectl apply -f daily-backup.yaml
# Check the status of the CronJob
kubectl get cronjobs
# View the logs of the CronJob's pods
kubectl logs job/daily-backup-<timestamp>
# Clean up the CronJob after completion
kubectl delete cronjob daily-backup
```
