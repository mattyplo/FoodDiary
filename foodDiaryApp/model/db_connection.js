var mysql = require('mysql');
let credentials = require('./credentials');


function sqlConnection(sql, callback) {

    var con = mysql.createConnection(credentials.db);

    con.connect(function(err){
    if (err)
        console.log('[MySQL] Error: ' + err + '\n'); 
    });

    //standard query 
    con.query(sql, function (err, result){

        con.end(); //close connection avoid concurrency error

        if (err) callback(err, null);
        callback(null, result);
    });

};

module.exports = sqlConnection;