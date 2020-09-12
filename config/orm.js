const connection = require("./connection.js");

  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

//This function will select all from the burgers table
const orm = {
    selectAll: function(tableInput, cb){
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
//This function will allow information to be ented into the database    
    insertOne: function(tableInput, colOne, colTwo, valOne, valTwo, cb){
        const queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        connection.query(queryString, [tableInput, colOne, colTwo, valOne, valTwo], function(err, result){
            if (err) throw err;
            cb(result)
        })
    },

    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },

      delete: function(table, column, value, cb){
        let queryString = "DELETE FROM ?? WHERE ?? = ?";
        connection.query(queryString, [table, column, value], function(err, result){
          if (err) throw err;
          cb(result);
        })
      }
//This function will update the boolean devoured value
    // updateOne: function(tableInput, colOne, valOne, colToSearch, valOfCol, cb){
    //     const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    //     connection.query(queryString, [tableInput, colOne, valOne, colToSearch, valOfCol], function(err, result){
    //         if(err) throw err;
    //         cb(result);
    //     })
    // }    

}
  
module.exports = orm;
