const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'rootuser',
    database: 'employee_cms_db'
  },
);


function init(){
  initialPrompt();
}

function initialPrompt(){
inquirer.prompt([
  {
  type: "list",
  message: "What would you like to do?",
  name: "selection",
  choices: ["View All Departments", "View All Roles", "View All Employees", "Add Department", "Add Role", "Add Employee", "Update an employee", "Exit Program"]
  }
])
  .then((selection) => {
    console.log(selection);
  })}
