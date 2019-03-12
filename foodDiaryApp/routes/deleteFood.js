var express = require('express');
let fm = require('../control/food_Manipulation')
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('foods_list', {
    title:'DELETE FOOD',

    
  });

  let food = req.query;
  var isEmpty = food.foodName == undefined
              ? true : false;
  //console.log('Is input empty:' + isEmpty);
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
          else console.log('Food is referred in meals, cannot be deleted!');
        });
      } else {
        console.log('no such food');
      }
    })
  }

});

module.exports = router;