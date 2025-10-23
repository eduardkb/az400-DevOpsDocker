-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS `${MYSQL_DATABASE}`;

-- Create application user if it doesn't exist
CREATE USER IF NOT EXISTS '${MYSQL_USER}'@'%' IDENTIFIED BY '${MYSQL_PASSWORD}';

-- Grant all privileges to the application user on the database
GRANT ALL PRIVILEGES ON `${MYSQL_DATABASE}`.* TO '${MYSQL_USER}'@'%';

-- Set root password and restrict root access to localhost
ALTER USER 'root'@'localhost' IDENTIFIED BY '${MYSQL_ROOT_PASSWORD}';