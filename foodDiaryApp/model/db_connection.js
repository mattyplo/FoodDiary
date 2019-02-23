var mysql = require('mysql');
var credentials = require('./credentials');

var con = mysql.createConnection(credentials.db);



con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
});
