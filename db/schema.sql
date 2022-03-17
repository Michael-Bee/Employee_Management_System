DROP DATABASE IF EXISTS employee_cms_db;
CREATE DATABASE employee_cms_db;

USE employee_cms_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
    ON DELETE SET NULL
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    deptartment_id INT NOT NULL REFERENCES department(id),
    salary DECIMAL NOT NULL
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL REFERENCES role(id),
    manager_id INT REFERENCES employee(id)
   
    ON DELETE SET NULL
);