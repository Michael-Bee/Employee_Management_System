const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'rootuser',
    database: 'employees_db'
  },
);

//An array of questions for user input
//Need to make a bunch of different arrays that can redirect to based on user responses
const welcome = [
    {
        
    },
];

//Prompts user using the question array
inquirer.prompt(welcome)
    .then((answers) => {
        console.log(answers);
    }
);
