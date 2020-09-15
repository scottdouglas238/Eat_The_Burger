const mysql = require("mysql");

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'z8dl7f9kwf2g82re.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'us8oqd5alz7497lt',
    password: 'xz412qg9p04cxnek',
    database: 'zseiuh9qy21wcf1p'
  });
};                                                                                                   

// const connection = mysql.createConnection({
//     host: "z8dl7f9kwf2g82re.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//     port: 3306,
//     user: "us8oqd5alz7497lt",
//     password: "xz412qg9p04cxznek",
//     database: "zseiuh9qy21wcf1p"
//   });

  connection.connect(function(err) {
    if (err) throw err;
  });

module.exports = connection;
