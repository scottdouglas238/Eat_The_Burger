DROP DATABASE IF EXISTS burger;
CREATE DATABASE burger;

USE burger;

CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR(30),
  devoured INT default 0
);