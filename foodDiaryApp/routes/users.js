var express = require('express');
var router = express.Router();
var db = require('../model/db');

router.post('/', function(req, res, next){
    var query = "INSERT INTO users" 
            + "(FirstName, LastName, UserName, `Password`)"
            + "VALUES (?, ?, ?, ?);"
    
    var queryParams = [
        req.body.firstname,
        req.body.lastname, 
        req.body.username,
        req.body.password
    ];
    
    db.query(query, queryParams, (error, result, fields)=> {
        if (error){
            console.log(error);
            res.render('registrationFail', {title:'Registration Failed'});
        } else {
            res.render('profile', {title:'Profile' });
        }
    });
        
        
});

module.exports = router;
