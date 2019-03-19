var express = require('express');
var router = express.Router();
var db = require('../model/db_connection');
var auth = require('../control/auth');

const util = require('util');

router.get('/', auth, function(req, res, next){
    res.render('profile', {title:'Profile'});
});

module.exports = router;