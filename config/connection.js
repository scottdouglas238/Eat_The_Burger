const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "heroku_af2b417cdb51a32"
  });

  connection.connect(function(err) {
    if (err) throw err;
  });

module.exports = connection;