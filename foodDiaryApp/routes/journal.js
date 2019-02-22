var express = require('express');
var meals = require('../model/mockMeals');
var router = express.Router();

const util = require('util');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('journal', {
    title:'Journal',
    meals: meals
  });
});

module.exports = router;
