INSERT INTO department(name)
VALUES ( "Legal"),
       ( "Finance"),
       ( "Sales"),
       ( "Engineering"),
       ( "Logistics"),
       ( "Safety");

INSERT INTO role( title,salary,department_id)
VALUES ( "Lawer", 60000, 1),
       ( "Financial Advisor", 55000, 2),
       ( "Sales Advisor", 45000, 3),
       ( "Engineer", 57000, 4),
       ( "Supplay Manager", 62000, 5),
       ( "Safety Coordinator", 63000,6);


INSERT INTO employee( first_name, last_name, role_id, manager_id)
VALUES( "Zaira" ,"Barry", 1, null ),
      ( "Tom" ,"Hanks", 2, null ),
      ( "Jerry" ,"Bo", 3, 2 ),
      ( "Jay" ,"Lo", 4, 6 ),
      ( "Margaret" ,"Polo", 5, 2 ),
      ( "Adil" ,"Azi", 6, null );

