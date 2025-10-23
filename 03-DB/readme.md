# MySQL DB

## Build docker container

```sh
docker build -t mysql-img .
```

## Run the container

```sh
docker run -d -p 3306:3306 --name mysql-cont \
  -e MYSQL_ROOT_PASSWORD=$(grep MYSQL_ROOT_PASSWORD .env | cut -d '=' -f2) \
  -e MYSQL_DATABASE=$(grep MYSQL_DATABASE .env | cut -d '=' -f2) \
  -e MYSQL_USER=$(grep MYSQL_USER .env | cut -d '=' -f2) \
  -e MYSQL_PASSWORD=$(grep MYSQL_PASSWORD .env | cut -d '=' -f2) \
  mysql-img
```
