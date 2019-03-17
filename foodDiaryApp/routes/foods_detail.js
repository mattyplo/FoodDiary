var express = require('express');
var router = express.Router();
var auth = require('../control/auth');


// detail
router.get('/:foodID', function(req, res, next) {
  res.render('foods_detail',{
    title:'FOODS',

  });

});

// function getFood(foodID){
//   let sqlQuery = "SELECT * FROM FOODS WHERE FoodID = ?";
//   // console.log(sqlQuery + foodID);
//   db.query(sqlQuery, foodID, (error, result) => {
//     if (error) {
//       res.status(500).send(error);
//     }

//     // console.log(result);
//     res.send(result);
//   });
// }

module.exports = router;
