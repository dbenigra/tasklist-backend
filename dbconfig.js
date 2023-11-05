const { response } = require('express');
const mysql = require('mysql');
const config = require('./config.js');

// Create a database connection
const dbConn = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
});

// Open the MySQL connection
dbConn.connect(error => {
  if (error) {
    return console.log(error);
  }
  console.log('Connected to the database successfully...')
});

module.exports = dbConn;  