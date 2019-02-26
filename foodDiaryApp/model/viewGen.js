let sql = require('./db_connection');

sql("SELECT UserID FROM USERS", 
      function(err, rows, fields){
         console.log(rows);
         console.log(rows[1]);
      })

// var viewGen = function viewGen(user, err){
    
    
//     var userID;
//     sql("SELECT UserID FROM USERS "
//          + "WHERE UserName = '"
//          + user + "';"
//       , function(err, rows, field){
//          userID = rows;
//          console.log(userID);
//       });
//     //console.log(userID);
//     //Create users view
//     // sql("CREATE VIEW V_" + user + "_USERS "
//     //     + "AS SELECT FirstName, LastName, UserName "
//     //     + "FROM USERS "
//     //     + "WHERE UserID = "
//     //     + userID
//     // );
//     // //Create meals view
//     // var mealID =
//     // sql("CREATE VIEW V_" + user + "_MEALS "
//     //     + "AS SELECT MealID, MealDate, MealTypeID "
//     //     + "FROM MEALS "
//     //     + "WHERE UserID = "
//     //     + userID
//     // );

//     // console.log(mealID);

//     if (err) throw err;                 
//     return userID;
// }

// viewGen('UserName0');