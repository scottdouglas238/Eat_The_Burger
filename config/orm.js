const connection = require("./connection.js");

//This function will select all from the burgers table
const orm = {
    selectAll: function(tableInput){
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result){
            if(err) throw err;
            console.log(result);
        });
    },
//This function will allow information to be ented into the database    
    insertOne: function(tableInput, colOne, colTwo, valOne, valTwo){
        const queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        connection.query(queryString, [tableInput, colOne, colTwo, valOne, valTwo], function(err, result){
            if (err) throw err;
            console.log(result);
        })
    },
//This function will update the boolean devoured value
    updateOne: function(tableInput, colOne, valOne, colToSearch, valOfCol){
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colOne, valOne, colToSearch, valOfCol], function(err, result){
            if(err) throw err;
            console.log(result);
        })
    }    

}
  
module.exports = orm;
