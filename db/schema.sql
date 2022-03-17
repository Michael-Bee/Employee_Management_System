DROP DATABASE IF EXISTS employee_cms_db;
CREATE DATABASE employee_cms_db;

USE employee_cms_db;

CREATE TABLE departments (
    dept_id INT NOT NULL AUTO_INCREMENT,
    deptartment VARCHAR(30) NOT NULL
    
    FOREIGN KEY (departments)
    REFERENCES departments(department)
    ON DELETE SET NULL
);

CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    deptartment VARCHAR(30) NOT NULL,
    salary INT NOT NULL,

    FOREIGN KEY (departments)
    REFERENCES departments(department)
    
    ON DELETE SET NULL
);

CREATE TABLE employees (
    emp_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    title VARCHAR(30) NOT NULL,
    deptartment VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    manager VARCHAR(30),

    FOREIGN KEY (department)
    REFERENCES department(id)
    
    ON DELETE SET NULL
);