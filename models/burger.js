const orm = require("../config/orm.js");
//This will display all burgers
orm.selectAll('burgers');

//This will target the table burgers, insert into colum burger_name Guac, and into dev 0
//Variables will need to be placed for the 'Guac' part, that's where new burger names go
orm.insertOne('burgers', 'burger_name', 'devoured', 'Guac', 0)

//This will target burgers table and set colum devoured to 0 where id = 1
//Variable will need to be placed under where 'id' is as well as the second argument after.
orm. updateOne('burgers', 'devoured', '0', 'id', 1)

