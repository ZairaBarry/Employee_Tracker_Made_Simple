INSERT INTO department(name)
VALUES ( "Legal"),
       ( "Finance"),
       ( "Sales"),
       ( "Engineering"),
       ( "Logistics"),
       ( "Safety");

INSERT INTO role( title,salary,department_id)
VALUES ( "Lawer", 60000, 01),
       ( "Financial Advisor", 55000, 02),
       ( "Sales Advisor", 45000, 03),
       ( "Engineer", 57000, 04),
       ( "Supplay Manager", 62000, 05),
       ( "Safety Coordinator", 63000,06);


INSERT INTO employee( first_name, last_name, role_id, manager_id)
VALUES( "Zaira" ,"Barry", 11, null ),
      ( "Tom" ,"Hanks", 22, null ),
      ( "Jerry" ,"Bo", 33, 2 ),
      ( "Jay" ,"Lo", 44, 6 ),
      ( "Margaret" ,"Polo", 55, 2 ),
      ( "Adil" ,"Azi", 66, null );

