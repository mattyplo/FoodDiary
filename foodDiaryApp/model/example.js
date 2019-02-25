let sql = require('./db_connection');

sql("SELECT UserID FROM USERS",
    function (err, rows){
        userID = rows;
        console.log(userID);
        console.log('This is an (associative) array with object in each element- UserID of the first user is: ' + userID[0].UserID);
    });


sql("SELECT UserID, FirstName FROM USERS",
function (err, rows){
    userID = rows;
    console.log(userID);
    console.log('This is an (associative) array with object in each element- UserID of the first user is: ' + userID[0].UserID);
});