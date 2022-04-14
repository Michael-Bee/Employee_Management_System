const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const figlet = require('figlet');

// figlet intro
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

// Start Up
function init(){
  db.connect(function(err) {
    if (err) throw err;
    console.log("Database connected!");
  });
  initialPrompt();
}

// Initial Prompt
function initialPrompt(){
  inquirer.prompt([
    {
    type: "list",
    message: "What would you like to do?",
    name: "selection",
    choices: [
      "View All Departments", 
      "View All Roles", 
      "View All Employees", 
      "Add Department", 
      "Add Role", 
      "Add Employee", 
      "Update an employee", 
      "Exit Program"
      ]
    }])
  .then((answer) => {
    console.log(answer);
    console.log(`You chose ${answer.selection}.`);

    switch (answer.options) {
      case "View All Departments":
            viewAllDepartments()
            break;
      case "View All Roles":
            viewAllRoles()
            break;
      case "View All Employees":
            viewAllEmployees()
            break;
      case "Add Department":
            addDepartment()
            break;
      case "Add Role":
            addRole()
            break;
      case "Add Employee":
            addEmployee()
            break;
      case "Update an employee":
            updateEmployee()
            break;
      case "Exit Program":
            goodbye()
            break;
    }
  })
};

// View All Functions
function viewAllDepartments() {
  db.query(`SELECT * FROM departments;`, function (err, results) {
    console.table(results);
    });
  initialPrompt();
}

function viewAllRoles() {
  db.query(`SELECT * FROM roles;`, function (err, results) {
    console.table(results);
    });
  initialPrompt();
}

function viewAllEmployees() {
  db.query(`SELECT * FROM employees;`, function (err, results) {
    console.table(results);
    });
  initialPrompt();
}

// Add Functions
function addDepartment() {
  inquirer.prompt([
			{
				type: "input",
				message: "What is the name of the new department?",
        name: "newDepartment",
			},
		])
		.then((answer) => {
			db.query(
				`INSERT INTO department VALUES (default, "${answer.newDept}");`,
				(err, res) => {
					console.log(`${answer.newDept} department added`);
					console.log(err);
}

function addRole()

function addEmployee()


// Other Functions
function updateEmployee()

function goodbye() {
  console.log("Exiting the Employee Management System. Goodbye!");
  process.exit();
}

init();