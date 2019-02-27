var express = require('express');
var meals = require('../model/mockMeals');
var router = express.Router();
var db = require('../model/db_connection');

const util = require('util');

var sql = "select * from users";
db(sql, function(err, info) {
/* GET users listing. */
  console.log(info);
  router.get('/', function(req, res, next) {
    res.render('journal', {
      title:'Journal',
      meals: meals.meals,
      users: info[0].FirstName
    });
  });
})
   
module.exports = router;
