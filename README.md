# Employee_Tracker_Made_Simple

## Description

This projecy is a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## Installation

In order to use the app you have to install inquirer, please use npm i inquirer@8.2.4 and the console.table package to print MySQL rows to the console.

## Usage

WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

![Screenshot of application](./Assets/Screenshot.jpg)

link to the walkthrough video -https://drive.google.com/file/d/1uAMvb3KugVDo2C9sVIwAFnKfUAkhZWNP/view


## Tests

In order to run the application run the command node index.js

## License

This application is licensed under MIT
