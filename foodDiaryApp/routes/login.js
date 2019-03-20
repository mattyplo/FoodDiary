var express = require('express');
var router = express.Router();
var db = require('../model/db');
//var auth = require('./authorization');

/* Access login function */
router.post('/', function(req, res, next) {
    var query = "SELECT UserID, UserName, Password"
        + " FROM Users"
        + " WHERE Users.UserName = '" + req.body.username + "';"

    db.query(query, function(error, result, fields) {
	if (error) {
            // Web result of DB error possible?
	    //res.status(500.send(error));
	    console.log(error);
	} else {
        if (result.length === 0) {
          var incorrectLoginMsg = encodeURIComponent('Your UserID or Password was invalid');
  res.redirect('/?valid=' + incorrectLoginMsg);
        }
	    else if (!result[0].Password || String(result[0].Password).trim() == String(req.body.password).trim()) {
          // I believe session code should be added here:
          req.session.user = result[0].UserName;
          req.session.admin = true;
          req.session.userID = result[0].UserID;
          console.log(req.session);
          res.redirect('/journal')
	    } else {
		  var incorrectLoginMsg = encodeURIComponent('Your UserID or Password was invalid');
  res.redirect('/?valid=' + incorrectLoginMsg);
	    }
	    
	}
    });
});


module.exports = router;
/* maybe possible to redirect to logon page on logon fail?
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Login' });
});

module.exports = router;
*/
