var express = require('express');
var meals = require('../model/mockMeals');
var router = express.Router();
var db = require('../model/db_connection');
var auth = require('../control/auth');

const util = require('util');

router.get('/', auth, function(req, res, next) {
  res.render('journal', {
    title:'Journal' 
  });
});

module.exports = router;
