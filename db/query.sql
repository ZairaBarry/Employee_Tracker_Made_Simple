-- View Roles
SELECT role.ID, role.title as role_title, role.salary AS role_salary, department.name AS dep_name
FROM role
JOIN department ON role.department_id = department.id;

-- View all employee
SELECT employee.ID, employee.first_name, employee.last_name, role.title AS role_title, department.name AS dep_name, role.salary AS role_salary, CONCAT (manager.first_name, " ", manager.last_name) AS manager_name
 FROM employee
 LEFT JOIN role ON role.ID = employee.role_id
 LEFT JOIN department ON department.ID = role.department_id
 LEFT JOIN  employee manager  ON employee.manager_id= manager.ID;

 