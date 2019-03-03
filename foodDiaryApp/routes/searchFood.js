var express = require('express');
let fm = require('../control/food_Manipulation')
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('searchFood', {
    title:'SEARCH FOODS',

    
  });

  let food = req.query;
  // console.log('query is ' + food.foodName);
  var isEmpty = food.foodName == undefined
              ? true : false;
  // console.log(isEmpty);
  if (!isEmpty) {
    fm.fuzzySearch(food.foodName,(err, results) => {
        if (err) console.log(err);

        for (i = 0; i < results.length; i++){
            console.log(
                "Food Name: "
                + results[i].FoodName +
                " Grams Per Serving: "
                + results[i].GramsPerServing +
                " Calories Per Gram: "
                + results[i].CaloriesPerGram +
                '\n'
            )
        }
    });
  }

});

module.exports = router;
