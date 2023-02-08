const express = require('express');
const db = require('./connection')

const inquirer = require('inquirer');
const table = require('console.table');

// Question Section

function chooseQuestion() {
  inquirer.prompt(
    {
      type: 'list',
      name: 'options',
      message: 'What would you like to do?',
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update employee role",
        "View budget of the department"
      ]
    })
    .then(response => {
      switch (response.options) {
        case "View all departments":
          viewDepartments();
          break;

        case "View all roles":
          viewRoles();
          break;

        case "View all employees":
          viewEmployees();
          break;

        case "Add a department":
          addDepartment();
          break;

        case "Add a role":
          addRole();
          break;

        case "Add an employee":
          addEmployee();
          break;

        case "Update employee role":
          updateRole();
          break;

        case "View budget of the department":
          sumSalary();
          break;
      }
    })
};

// Query Section 
// function to view All Departments

function viewDepartments() {
  db.query('SELECT * FROM department', (err, results) => {
    if (err) throw err;
    console.table(results)
    chooseQuestion()
  })
};

// Function to view roles by department
function viewRoles() {
  db.query("SELECT role.ID, role.title as role_title, role.salary AS role_salary, department.name AS depName FROM role LEFT JOIN department ON role.department_id = department.id", (err, results) => {
    if (err) throw err;
    console.table(results)
    chooseQuestion()
  })
};

// Function to view employees with the corresponding manager name
function viewEmployees() {
  db.query("SELECT employee.ID, employee.first_name, employee.last_name, role.title AS role_title, department.name AS dep_name, role.salary AS role_salary, CONCAT (manager.first_name,' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON role.ID = employee.role_id LEFT JOIN department ON department.ID = role.department_id LEFT JOIN  employee manager  ON employee.manager_id= manager.ID", (err, results) => {
    if (err) throw err;
    console.table(results)
    chooseQuestion()
  })
};

// function to add department to database

function addDepartment() {
  inquirer.prompt([
    {
      type: "input",
      name: "department",
      message: "What is the name of the department"
    }
  ])
    .then(response => {
      db.query(`INSERT INTO department (name) VALUES ('${response.department}')`, (err, results) => {
        if (err) throw err;
        console.log(`${response.department} department has been added!`);
        chooseQuestion()
      });
    })
}

// function to add role to corresponnding department
function addRole() {
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the role"
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary for the role"
    },

    {
      type: "input",
      name: "department_id",
      message: "What is the department id for this role"
    }]
  )
    .then(response => {
      db.query("INSERT INTO role SET ?",
        {
          title: response.title,
          salary: response.salary,
          department_id: response.department_id
        }, (err, results) => {
          if (err) throw err;
          console.log(`${response.title} role has been added!`);
          chooseQuestion()

        })
    })
}

// functio to add employee
function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the first name of the employee?"
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the last name of the employee?"
    },

    {
      type: "input",
      name: "role_id",
      message: "What is the role id of the employee?"
    },
    {
      type: "input",
      name: "manager_id",
      message: "What is the manager ID of the employee?"
    }]
  )
    .then(response => {
      db.query('INSERT INTO employee SET ?',
        {
          first_name: response.first_name,
          last_name: response.last_name,
          role_id: response.role_id,
          manager_id: response.manager_id
        },

        (err, results) => {
          if (err) throw err;
          console.log(`${response.last_name} employee has been added!`);
          chooseQuestion();

        })
    })
};

// function to change the roles
function updateRole() {
  inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "Please enter the name of the employee",

    },
    {
      type: "input",
      name: "role_id",
      message: "Which role do you want to assign to selected employee? Enter role_id",
    }]
  )
    .then(response => {
      db.query("UPDATE  employee SET role_id=? WHERE first_name=?", [response.role_id, response.first_name],
        function (err, res) {
          if (err) throw err;
          console.log(`${response.first_name} role has been updated!`)

          chooseQuestion()
        }
      );
    })
};

// function to view utilized budget by department
function sumSalary() {
  inquirer.prompt([
    {
      type: "input",
      name: "department.name",
      message: "Please enter the name of the deparmtnet you would like to see the total utilized budget for",
    }]
  )
    .then(response => {
      db.query(`SELECT department.name, SUM(role.salary) FROM department JOIN role on department.ID =role.department_id  WHERE department.name = ('${response.department.name}') ` + `GROUP BY department.name `, (err, results) => {
        if (err) throw err;
        console.table(results)
        chooseQuestion()
      });
    })
};
chooseQuestion()
