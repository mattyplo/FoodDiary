var express = require('express');
var router = express.Router();
var db = require('../model/db_connection');

router.get('/all', function(req, res, next) {
  var query = "SELECT * FROM meals;";
  db(query, (error, result) => {
    if (error) {
      res.status(500).send(error);
    }
    res.send(result);
  });
});

router.get('/mealsFoodsID/:mealID', function(req, res, mnext) {
  var query = "SELECT FoodID FROM MealsFoods WHERE MealID =" + req.params.mealID;
  //console.log(req.params.mealID);
  db(query, (error, result, fields) => {
    if (error) {
      res.status(500).send(error);
    }
    res.send(result);
  })
})

module.exports = router;