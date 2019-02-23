var mysql = require('mysql');
let credentials = require('./credentials');

let sqlConnection = function sqlConnection(sql, next) {

    let con = mysql.createConnection(credentials.db);

    con.connect(function(err){
    if (err)
        console.log('[MySQL] Error: ' + err + '\n'); 
    });

    //standard query 
    con.query(sql, function(err){

        con.end(); //close connection avoid concurrency error

        if (err) throw err;
    });
}

module.exports = sqlConnection;

