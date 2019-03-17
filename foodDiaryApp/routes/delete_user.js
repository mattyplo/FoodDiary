var express = require('express');
var router = express.Router();
var db = require('../model/db');


/* GET delete_user page */
router.get('/', function(req, res, next) {
    res.render('delete_user', {title: 'Delete user' });
});

/* POST handler that deletes user */
router.post('/', function(req, res, next) {
    var query = "DELETE FROM users"
        + " WHERE UserName = " + req.body.username
        + " AND Password = " + req.body.password;

    db.query(query, (error, result, fields)=> {
	if (error) {
	    res.status(500).send(error);
	} else {
	    res.redirect('/');
	}
    });
});

module.exports = router;
