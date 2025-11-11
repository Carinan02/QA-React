const mysql = require("mysql2");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: process.env.DB_PASS,
  database: "qareact",
});

db.connect((err) => {
  if (err) {
    console.error("Mysql Connection Failed: ", err);
  } else {
    console.log("Mysql Connection Successful");
  }
});

module.exports = db;
