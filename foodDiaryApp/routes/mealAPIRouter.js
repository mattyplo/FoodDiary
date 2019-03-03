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

router.post('/newMeal', function(req, res, next) {
  var query = "INSERT INTO MEALS (MealDate, MealTypeID, UserID) VALUES ('2019-01-22', 2, 1)";
  db(query, (error, result) => {
    if (error) {
      res.status(500).send(error);
    }
    console.log("success");
    res.render('journal');
  })
})

module.exports = router;