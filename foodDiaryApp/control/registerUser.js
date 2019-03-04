let sql = require('../model/db_connection');

function registerUser(user) {
  
  // Add new user
  let query_insertNewUser = "INSERT INTO users" 
            + "(UserID, FirstName, LastName, UserName, `Password`)"
            + "VALUES (DEFAULT," + `'` + user.first_name + "', " + "'" + user.last_name + "', " 
            + "'" + user.username + "', " 
            + "'" + user.password + "');";
      
  function addUser(user){
      sql(query_insertNewUser, (err, result)=> {
          if (err) throw err;
      });
  }


}

module.exports = registerUser;

/*exports.register = function(req,res){
  console.log("req",req.body);
  var user={
    "first_name":req.body.first_name,
    "last_name":req.body.last_name,
    "username":req.body.username,
    "password":req.body.password
  }
  */