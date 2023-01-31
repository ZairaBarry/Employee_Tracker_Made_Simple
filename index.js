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

        case "Add employee":
          addEmployee();
          break;

        case "Update employee role":
          updateRole();
          break;
      }
    })
};

// Query Section 

function viewDepartments() {
  db.query('SELECT * FROM department', (err, results) => {
    if (err) throw err;
    console.table(results)
    chooseQuestion()
  })
};

function viewRoles() {
  db.query("SELECT role.ID, role.title as role_title, role.salary AS role_salary, department.name AS depName FROM role LEFT JOIN department ON role.department_id = department.id", (err, results) => {
    if (err) throw err;
    console.table(results)
    chooseQuestion()
  })
};


