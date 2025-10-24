# Backend API

## Build docker image

```sh
docker build -t api .
```

## Run Docker Image

```sh
docker run -d `
  --name api `
  --env-file .env `
  -p 4000:4000 `
  --restart unless-stopped `
  api
```
