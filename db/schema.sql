DROP DATABASE IF EXISTS tracker_db ;
CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE department(
 ID INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(30),
 PRIMARY KEY (ID)
 );

CREATE TABLE role (
    ID INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (ID),
    FOREIGN KEY (department_id)
    REFERENCES department (ID)
);

CREATE TABLE employee (
    ID INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (ID),
    FOREIGN KEY (role_id)
    REFERENCES role (ID),
    FOREIGN KEY (manager_id)
    REFERENCES employee(ID)
);


