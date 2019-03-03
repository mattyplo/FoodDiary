var express = require('express');
let fm = require('../control/food_Manipulation')
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('foods', {
    title:'FOODS',

    
  });

  let food = req.query;
  console.log('query is ' + food.foodName);
  var isEmpty = food.foodName == undefined
              ? true : false;
  console.log(isEmpty);
  // console.log('food is ' + food.foodName);
  if (!isEmpty) {
    //fm.man(food);
    //test search
    fm.search(food.foodName, (err, result) => {
      if (err) console.log(err);
      console.log(result);
    })
    //test FK constraint check
    fm.check(food.foodName, (err, isConstraint) => {
      if (err) console.log(err);
      console.log(isConstraint);
    });
    //test delete
    fm.del(food.foodName); 

  }

});

// router.get('/', function(req, res, next) {

//   let food = req.query;
//   fm(food);

// });




module.exports = router;

//set space DEBUG=expressparrot:* npm start