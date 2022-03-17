const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const figlet = require('figlet');

//figlet intro
console.log(figlet.textSync(
  'Employee Management System',
  {
    font: 'speed',
    horizontalLayout: 'default',
    verticalLayout: 'fitted',
    width: 100,
    whitespaceBreak: true
  }
))

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'rootuser',
    database: 'employee_cms_db'
  },
);

//Start Up
function init(){
  db.connect(function(err) {
    if (err) throw err;
    console.log("Database connected!");
  });
  initialPrompt();
}

// First Prompt
function initialPrompt(){
  inquirer.prompt(
    {
    type: "list",
    message: "What would you like to do?",
    name: "selection",
    choices: [
      "View All Departments", 
      "View All Roles", 
      "View All Employees", 
      // "Add Department", 
      // "Add Role", 
      // "Add Employee", 
      // "Update an employee", 
      "Exit Program"
      ]
    })
  .then((data) => {
    console.log(data);
    console.log(`You chose ${data.selection}.`);

  // Second Prompt based on selection
    // "View All" Selections
    if (data.selection === "View All Departments") {
      db.query(`SELECT * FROM departments;`, function (err, results) {
        console.table(results);
      });
      initialPrompt();
    }

      else if (data.selection === "View All Roles") {
        db.query(`SELECT * FROM roles;`, function (err, results) {
          console.table(results);
        });
        initialPrompt();
      }

      else if (data.selection === "View All Employees") {
        db.query(`SELECT * FROM employees;`, function (err, results) {
          console.table(results);
        });
        initialPrompt();
      }

      // //"Add" Selections
      // else if (data.selection === "Add Department") {
      //   initialPrompt();
      // }

      // else if (data.selection === "Add Role") {
      //   initialPrompt();
      // }

      // else if (data.selection === "Add Employee") {
      //   initialPrompt();
      // }

      // //Other Selections
      // else if (data.selection === "Update an employee") {
      //   initialPrompt();
      // }

      else /*(data.selection === "Exit Program")*/ {
        console.log("Exiting the Employee Management System. Goodbye!");
        process.exit();
      }
  })}

  init();