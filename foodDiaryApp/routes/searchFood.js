var express = require('express');
let fm = require('../control/food_Manipulation')
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('foods_list', {
    title:'SEARCH FOODS',
  });

  let food = req.query;
  console.log('query is ' + food.foodName);
  var isEmpty = food.foodName == undefined
              ? true : false;
  // console.log(isEmpty);
  if (!isEmpty) {
    fm.fuzzySearch(food.foodName,(err, results) => {

        // if (err) {
        //   res.status(500).send(error);
        // }
        // res.send(results);
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
script.
$(document).ready(function(){
    $.getJSON('/foods/search', (results) => {
        console.log('this is the ' + results);
        $.each(results, (i, field) => {
            "<div class='foodlist_item'>"
          + "<a id='" + field.FoodName + " herf='/foods/detail?foodName=" + field.FoodName + "'>"
          + "<img class='foodicon' src='/img/placeholder.png' alt='Food Icon'>"
          + "<div class=foodlist_itemProperty>"
          + "<ul>"
          + "<il class='foodlist_itemName'> "+ field.FoodName + "</il> </br> </br>"
          + "</ul>"
        })
    })
})

    
    .foodlist_item
    a(herf='')
    img.foodicon(src='/img/placeholder.png' alt='Food Icon')

    for(i=0; i<results.length; i++){
      "<div class='foodlist_item'>"
      + "<a id='" + results[i].FoodName + " herf='/foods/detail?foodName=" + results[i].FoodName + "&FoodID=" + results[i].foodID + ">"
      + "<img class='foodicon' src='/img/placeholder.png' alt='Food Icon'>"
      + "<div class=foodlist_itemProperty>"
      + "<ul>"
      + "<il class='foodlist_itemName'> "+ results[i].FoodName + "</il> </br> </br>"
      + "<il> Serving Size: " + results[i].GramsPerServing + "grams </il> </br>"
      + "<il> Calories: " + results[i].CaloriesPerGram + " per gram </il>"
      + "</ul> </div> </a> </div>"
  }