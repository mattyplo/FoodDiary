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

/*var sql = "select * from meals";
db(sql, function(err, queryResults) {
 GET users listing. 
  console.log(queryResults);
  router.get('/', function(req, res, next) {
    res.render('journal', {
      title:'Journal',
      meals: meals.meals,
      users: JSON.stringify(queryResults[0])
    });
  });
})
   */



/*router.get('/', function(req, res, next) {
  var query = 'SELECT * FROM meals;';
  db(query, function(err, queryResults) {
    if (err) {
      res.status(500).send(error);
    }
    res.render('journal', {
      title:'Journal',
      meals: meals.meals,
      users: JSON.stringify(queryResults[0])
    });
  });
});*/

module.exports = router;
