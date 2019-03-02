var express = require('express');
let fm = require('../control/food_Manipulation')
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('foods', {
    title:'FOODS',

    
  });

  let food = req.query;
  console.log('query is ' + food);
  var isEmpty = typeof food === 'undefined' || food.length == 0 
              ? true : false;
  console.log(isEmpty);
  // console.log('food is ' + food.foodName);
  if (isEmpty === false) {
    fm.man(food);
    //test search
    fm.search('banana', (err, result) => {
      if (err) console.log(err);
      console.log(result);
    })
    //test delete
    fm.del('banana');
  }

});

// router.get('/', function(req, res, next) {

//   let food = req.query;
//   fm(food);

// });




module.exports = router;

//set space DEBUG=expressparrot:* npm start