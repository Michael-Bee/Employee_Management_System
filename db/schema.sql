DROP DATABASE IF EXISTS employee_cms_db;
CREATE DATABASE employee_cms_db;

USE employee_cms_db;

DROP TABLE IF EXISTS departments;
CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    deptartment_id INT NOT NULL REFERENCES department(id),
    salary DECIMAL NOT NULL
);

DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL REFERENCES roles(id),
    manager_id INT REFERENCES employee(id)
);

SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;