var express = require('express');
var router = express.Router();
var db = require('../model/db');

router.get('/', function(req, res, next){
    var incorrectLoginMsg = req.query.valid;
    res.render('profile', {title: 'Express', incorrectLoginMsg: incorrectLoginMsg});
});

module.exports = router;