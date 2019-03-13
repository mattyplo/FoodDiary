var express = require('express');
var router = express.Router();
var db = require('../model/db');

/* Access login function */
router.post('/', function(req, res, next) {
    var query = "SELECT UserName, Password"
        + " FROM Users"
        + " WHERE Users.UserName = '" + req.body.username + "';"

    db.query(query, function(error, result, fields) {
	if (error) {
            // Web result of DB error possible?
	    //res.status(500.send(error));
	    console.log(error);
	} else {
	    if(String(result[0].Password).trim() == String(req.body.password).trim()) {
		// I believe session code should be added here:
                
		res.redirect('/journal')
	    } else {
		res.redirect('/bad_login')
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
