INSERT INTO department(ID,name)
VALUES (01, "Legal"),
       (02, "Finance"),
       (03, "Sales"),
       (04, "Engineering"),
       (05, "Logistics"),
       (06, "Safety");

INSERT INTO role( ID,title,salary,department_id)
VALUES (11, "Lawer", 60000, 01),
       (22, "Financial Advisor", 55000, 02),
       (33, "Sales Advisor", 45000, 03),
       (44, "Engineer", 57000, 04),
       (55, "Supplay Manager", 62000, 05),
       (66, "Safety Coordinator", 63000,06);


INSERT INTO employee(ID, first_name, last_name, role_id, manager_id)
VALUES(1, "Zaira" ,"Barry", 11, null ),
      (2, "Tom" ,"Hanks", 22, null ),
      (3, "Jerry" ,"Bo", 33, 2 ),
      (4, "Jay" ,"Lo", 44, 6 ),
      (6, "Margaret" ,"Polo", 55, 2 ),
      (7, "Adil" ,"Azi", 66, null );

