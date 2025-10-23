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

## Interactively access container

```sh
docker exec -it mysql-cont bash

# Login root
mysql -u root

# display tables
show databases;

# select database
use <database>;

# show tables
show tables;

# see structure
describe <table>
```

## MANDATORY CONFIG: modify reactuser permission

Users cannot access database from outside the container.

```sh
# check users permissions (run inside mysql container)
SELECT user, host FROM mysql.user;

# if user not in table, execute: (% can be replaced by host from where to access)
CREATE USER 'reactusr'@'%' IDENTIFIED BY 'SqlUserP@ss1';

# if user does exist give user acess from anywhere (% could be replaced by 172.0.0.1 for example)
GRANT ALL PRIVILEGES ON reactdb.* TO 'reactusr'@'%';
FLUSH PRIVILEGES;
```

## MANDTORY CONFIG: create reactdb

```sh
create database reactdb;
```
