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
  mainMenu();
}

// Initial Prompt
function mainMenu() {
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
      "Update Employee Role", 
      "Exit Program"
      ]
    }])
  .then((answer) => {
    console.log(answer);
    console.log(`You chose ${answer.selection}.`);

    switch (answer.selection) {
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
      case "Update Employee Role":
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
    mainMenu();
  });
}

function viewAllRoles() {
  db.query(`SELECT * FROM roles;`, function (err, results) {
    console.table(results);
    mainMenu();
  });
}

function viewAllEmployees() {
  db.query(`SELECT * FROM employees;`, function (err, results) {
    console.table(results);
    mainMenu();
  });
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
		db.query(`INSERT INTO departments VALUES (default, "${answer.newDepartment}");`,
			(err, res) => {
				console.log(`New department ${answer.newDepartment} added`);
        mainMenu();
      }
    )
  })
};

function addRole() {
  inquirer.prompt([
		{
			type: "input",
			message: "What is the title of the new role?",
      name: "newRole",
		},
		{
			type: "input",
			message: "Which department has the new role?",
      name: "roleDept",
		},
    {
			type: "input",
			message: "What is the salary for the new role?",
      name: "roleSalary",
		},
	])
		.then((answer) => {
			db.query(`INSERT INTO roles VALUES (default,
				"${answer.newRole}",
				"${answer.roleDept}",
				"${answer.roleSalary}")`,
				(err, res) => {
					console.log(`New role ${answer.newRole} added`);
					mainMenu();
				}
			);
		});
}

function addEmployee() {
  inquirer.prompt([
		{
			type: "input",
			message: "What is the new employee's first name?",
      name: "firstName",
		},
		{
			type: "input",
			message: "What is the new employee's last name?",
      name: "lastName",
		},
		{
			type: "input",
			message: "What is the new employee's role?",
      name: "role",
		},
		{
			type: "input",
			message: "What is the new employee's manager ID?",
      name: "managerID",
		},
	])
		.then((answer) => {
			db.query(`INSERT INTO employees VALUES (default,
				"${answer.firstName}",
				"${answer.lastName}",
				"${answer.role}",
				"${answer.managerID}")`
			);
			console.log(`New employee ${answer.firstName} ${answer.lastName} added.`);
			mainMenu();
		});
}

// Other Functions
function updateEmployee() {
  db.query(`SELECT * FROM employees;`, function (err, results) {
    console.table(results);
	inquirer.prompt([
				{
					type: "input",
					message: "Which employee (id) do you want to update?",
          name: "empID",
				},
				{
					type: "input",
					message: "What is the employee's new role (role_id)?",
          name: "newRole",
				},
			])
			.then((answer) => {
				db.query(
					`UPDATE employees SET role_id = "${answer.newRole}" WHERE id = "${answer.empID}"`,
					(err, result) => {
						console.log(err);
						mainMenu();
					}
				);
			});
	});
}

function goodbye() {
  console.log("Exiting the Employee Management System. Goodbye!");
  process.exit();
}

init();