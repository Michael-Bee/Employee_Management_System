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

    //if then elses depending on selection
    if (selection === "View All Departments") {
    initialPrompt();
    }
    else if (selection === "View All Roles") {
      initialPrompt();
    }
    else if (selection === "View All Employees") {
      initialPrompt();
    }
    else if (selection === "Add Department") {
      initialPrompt();
    }
    else if (selection === "Add Role") {
      initialPrompt();
    }
    else if (selection === "Add Employee") {
      initialPrompt();
    }
    else if (selection === "Update an employee") {
      initialPrompt();
    }
    else (selection === "Exit Program") {
      process.exit();
    }
  })}


  init();