const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "us-cdbr-east-02.cleardb.com",
    port: 3306,
    user: "rb52db47bfdceb1",
    password: "422c01fb",
    database: "heroku_af2b417cdb51a32.burgers"
  });

  connection.connect(function(err) {
    if (err) throw err;
  });

module.exports = connection;