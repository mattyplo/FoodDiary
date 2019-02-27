var express = require('express');
let fm = require('../control/food_Manipulation')
var router = express.Router();
var app = express();
const util = require('util');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let food = req.query;
  console.log(food.foodName);
  fm(food);
  res.render('foods', {
    title:'FOODS',
  

   
  });

//router.get('/', function(req, res){
    let food = req.query;
    console.log(food.foodName);
    fm(food);
//});


});



module.exports = router;

//set space DEBUG=expressparrot:* npm start