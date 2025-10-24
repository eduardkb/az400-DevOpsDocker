# Backend API

## Build docker image

```sh
docker build -t react .
```

## Run Docker Image

```sh
docker run -d -p 80:80 \
    --name react \
    --env-file .env \
    --restart unless-stopped \
    react
```
