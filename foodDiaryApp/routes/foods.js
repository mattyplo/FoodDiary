var express = require('express');
let fm = require('../control/food_Manipulation')
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('foods', {
    title:'FOODS',

    
  });

  let food = req.query;
  // console.log('query is ' + food.foodName);
  var isEmpty = food.foodName == undefined
              ? true : false;
  // console.log(isEmpty);
  if (!isEmpty) {
    fm.man(food);
  }

});

// router.get('/', function(req, res, next) {

//   let food = req.query;
//   fm(food);

// });




module.exports = router;

//set space DEBUG=expressparrot:* npm start