DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
  id INT(10) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT false,
  date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);


INSERT INTO burgers (burger_name) VALUES ('Hawaiin Burger');
INSERT INTO burgers (burger_name) VALUES ('Mexican Burger');
INSERT INTO burgers (burger_name) VALUES ('Italian Burger');
INSERT INTO burgers (burger_name) VALUES ('kids Burger');
INSERT INTO burgers (burger_name) VALUES ('BBQ Burger');