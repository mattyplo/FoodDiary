var mysql = require('mysql');
let credentials = require('./credentials');


var con = mysql.createConnection(credentials.db);

module.exports = Connection;