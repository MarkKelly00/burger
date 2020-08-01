DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INT auto_increment primary key,
    burger_name VARCHAR(45) not null,
    devoured BOOLEAN default false
);