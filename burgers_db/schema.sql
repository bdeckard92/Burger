

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burgername varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date_time TIMESTAMP,
	PRIMARY KEY (id)
);
