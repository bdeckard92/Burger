/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database event_saver_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured ENUM('false', 'true') NOT NULL DEFAULT 'false',
date_time TIMESTAMP() NOT NULL,
PRIMARY KEY (id)
);

