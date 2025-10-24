# MySQL DB

## Build docker container

```sh
docker build -t mysql .
```

## Run container

```sh
docker volume create mysql_data

docker run -d `
  -p 3306:3306 `
  --name mysql `
  --env-file .env `
  -v mysql_data:/var/lib/mysql `
  --restart unless-stopped `
  mysql
```

## Interactively access container

```sh
docker exec -it mysql-cont bash

# Login root
mysql -u root -p

# display tables
show databases;

# select database
use <database>;

# show tables
show tables;

# see structure
describe <table>
```

## CONFIG: modify reactuser permission (docker does this)

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

## CONFIG: create reactdb (docker does this)

```sh
create database reactdb;
```
