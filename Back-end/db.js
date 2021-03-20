const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hossam",
  database: "news"
});

db.connect();

module.exports = db;
