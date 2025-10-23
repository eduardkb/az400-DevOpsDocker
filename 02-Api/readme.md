# Backend API

## Build docker image

```sh
docker build -t TrainingAppAPI:latest .
```

## Run Docker Image

```sh
docker run -d \
  --name my-node-app \
  --env-file .env \
  -p 8090:8090 \
  --restart unless-stopped \
  my-node-app:latest
```
