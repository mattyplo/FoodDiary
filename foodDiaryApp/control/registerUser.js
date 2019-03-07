var express = require('express');
var router = express.Router();
var db = require('../model/db_connection');

router.post('/addUser', function(req, res, next){
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
            res.status(500).send(error);
        }
        res.status(201).send('record added');
    });
    
    
});




