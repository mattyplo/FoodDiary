var express = require('express');
let fm = require('../control/food_Manipulation');
let db = require('../model/db.js');
var router = express.Router();


//add/edit food
router.get('/man', function(req, res, next) {
  let food = req.query;
  // console.log('query is ' + food.foodName);
  var isEmpty = food.foodName == undefined
              ? true : false;
  // console.log(isEmpty);
  if (!isEmpty) {
    fm.man(food);
  }
});

//delete food
router.get('/del', function(req, res, next) {

  let food = req.query;
  var isEmpty = food.foodName == undefined
              ? true : false;
  console.log('Is input empty:' + isEmpty);
  if (!isEmpty) {
    //test search
    fm.search(food.foodName, (err, result) => {
      if (err) console.log(err);
      console.log(result);

      var isNull = typeof result === 'undefined' || result.length == 0 
                ? true : false;
      if(!isNull){
        //test FK constraint check
        fm.check(food.foodName, (err, isConstraint) => {
          if (err) console.log(err);
          console.log('Prohibit to Delete: ' + isConstraint);

          if (!isConstraint) fm.del(food.foodName)
          else alert(food.foodName + ' is referred in one or more meals, cannot be deleted!');
        });
      } else {
        alert('The food ' + food.foodName + 'you want to delete do not exist!');
      }
    })
  } 
  else alert('The food ' + food.foodName + 'you want to delete do not exist!');

});

// search
router.get('/search/:food', function(req, res, next) {

  let food = req.params.food;

  var isEmpty = food == undefined || food.length == 0
              ? true : false;
  // console.log(isEmpty);
  if (!isEmpty) {
    // console.log('query item is ' + food);

    fm.fuzzySearch(food,(err, results) => {
      if (err) {
        res.status(500).send(error);
      }  

      // for (i = 0; i < results.length; i++){
      //     console.log(
      //       "Food Name: " + results[i].FoodName + " Grams Per Serving: "
      //        + results[i].GramsPerServing + " Calories Per Gram: " + results[i].CaloriesPerGram + '\n'
      //        )
      // }

      res.send(results);
    });
  }
});

router.get('/detail/:foodID', function(req, res, next) {

  let foodID = req.params.foodID;

  let sqlQuery = "SELECT * FROM FOODS WHERE FoodID = ?";
  // console.log(sqlQuery + foodID);
  db.query(sqlQuery, foodID, (error, result) => {
    if (error) {
      res.status(500).send(error);
    }

    // console.log(result);
    res.send(result);
  });

});

router.get('/ini/:num', function(req, res, next) {

  let num = req.params.num;

  let sqlQuery = "SELECT * FROM FOODS LIMIT " + num;
  // console.log(sqlQuery + num);
  db.query(sqlQuery, (error, result) => {
    if (error) {
      res.status(500).send(error);
    }

    // console.log(result);
    res.send(result);
  });

});

module.exports = router;
