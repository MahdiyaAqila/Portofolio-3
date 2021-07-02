var mysql = require('mysql');

const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "express-api"
});

module.exports = connect;