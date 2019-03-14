var express = require('express');
let fm = require('../control/food_Manipulation')
var router = express.Router();


//add/edit food
router.get('/man', function(req, res, next) {
  let food = req.query;
  console.log('query is ' + food.foodName);
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

// search
// router.get('/search', function(req, res, next) {

//   let food = req.query;
//   // console.log('query item is ' + food.foodName);
//   var isEmpty = food.foodName == undefined || food.foodName.length == 0
//               ? true : false;
//   // console.log(isEmpty);
//   if (!isEmpty) {
//     fm.fuzzySearch(food.foodName,(err, results) => {

//         if (err) {
//           res.status(500).send(error);
//         }


//         // res.render('foods_list', {
//         //   title:'FOODS',
//         //   results
//         // })

//         res.send(results);
//         // if (err) console.log(err);

//         // for (i = 0; i < results.length; i++){
//         //     console.log(
//         //         "Food Name: "
//         //         + results[i].FoodName +
//         //         " Grams Per Serving: "
//         //         + results[i].GramsPerServing +
//         //         " Calories Per Gram: "
//         //         + results[i].CaloriesPerGram +
//         //         '\n'
//         //     )
//         // }

//         // res.redirect('/foods')
//     });
//   }

// });

module.exports = router;
