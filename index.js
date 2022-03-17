const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const figlet = require('figlet');


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'rootuser',
    database: 'employee_cms_db'
  },
);

//figlet intro
console.log(figlet.textSync(
  'Employee Management System',
  {
    font: 'speed',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 200,
    whitespaceBreak: true
  }
))

//Start Up
function init(){
  initialPrompt();
}

//First Prompt
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
    console.log(`You chose ${selection}.`);

//Second Prompt based on selection
    //"View All" Selections
    if (selection === "View All Departments") {
      db.query(`SELECT * FROM departments;`, function (err, results) {
        console.table(results);
      });
      initialPrompt();
    }

    else if (selection === "View All Roles") {
      db.query(`SELECT * FROM roles;`, function (err, results) {
        console.table(results);
      });
      initialPrompt();
    }

    else if (selection === "View All Employees") {
      db.query(`SELECT * FROM employees;`, function (err, results) {
        console.table(results);
      });
      initialPrompt();
    }

    //"Add" Selections
    else if (selection === "Add Department") {
      initialPrompt();
    }

    else if (selection === "Add Role") {
      initialPrompt();
    }

    else if (selection === "Add Employee") {
      initialPrompt();
    }

    //Other Selections
    else if (selection === "Update an employee") {
      initialPrompt();
    }

    else (selection === "Exit Program") {
      console.log("Exiting the Employee Management System. Goodbye!")
      process.exit();
    }
  })}


  init();