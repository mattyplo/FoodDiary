var express = require('express');
var router = express.Router();
var db = require('../model/db_connection');

router.get('/all', function(req, res, next) {
  var query = "SELECT * FROM meals;";
  db(query, (error, result) => {
    if (error) {
      res.status(500).send(error);
    }
    res.send(result);
  });
});

// This router handles the editMeal form
router.post('/editMeal', function(req, res, next) {
  var foodName = req.body.foodName;
  var query = "SELECT FoodID FROM Foods WHERE FoodName ='" + foodName + "'";
  db(query, (error, result, fields) => {
    if (error) {
      res.status(500).send(error);
    }
    if (result.length === 0) {
      // no result, item does not exist, insert
      var query = "INSERT INTO Foods(FoodName, GramsPerServing, CaloriesPerGram) VALUES ('" + req.body.foodName + "', " + req.body.gramsPerServing + ", " + req.body.caloriesPerGram + ");";
      db(query, (error, result, fields) => {
        if (error) {
          res.status(500).send(error);
        }
        var foodID = result.insertId;
        addMealFoodFromMeal(foodID);
      })
      console.log("does not exist");
    } else {
      // result exists, use food id to switch foods in meal
      console.log("does exist");
    }
  })
  
  function addMealFoodFromMeal (foodID) {
    var mealsFoodsQuery = "INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed) VALUES (" + req.body.mealID + ", " + foodID + ", " + req.body.gramsConsumed + ");";
    db(mealsFoodsQuery, (error, result) => {
      if (error) {
        res.status(500).send(error);
      }
      res.redirect('/journal');
    });
  }
})

// will grab all necessary data from the db to populate journal page
router.get('/mealInfo/:userID', function(req, res, next) {
  var query = "SELECT MealDate, Meals.MealID, MealType, FoodName, GramsConsumed FROM Meals JOIN MealsFoods ON MealsFoods.MealID = Meals.MealID JOIN Foods ON Foods.FoodID = MealsFoods.FoodID JOIN MealTypes ON MealTypes.MealTypeID = Meals.MealTypeID WHERE UserID = 1 ORDER BY MealDate Desc;";
  db(query, (error, result, fields) => {
    if (error) {
      res.status(500).send(error);
    }
    res.send(result);
  });
})

// returns food name and foodID given a mealID
router.get('/foodInfo/:mealID', function(req, res, next) {
    var query = "SELECT FoodName, FoodID FROM Meals JOIN MealsFoods USING (MealID) JOIN Foods USING (FoodID) WHERE MealID =" + req.params.mealID + ";";
    db(query, (error, result, fields) => {
        if (error) {
            res.status(500).send(error);
        }
        res.send(result);
        console.log(result);
    })
})

// returns the FoodIDs when given a mealID as a parameter
router.get('/mealsFoodsID/:mealID', function(req, res, next) {
  var query = "SELECT FoodID FROM MealsFoods WHERE MealID =" + req.params.mealID;
  //console.log(req.params.mealID);
  db(query, (error, result, fields) => {
    if (error) {
      res.status(500).send(error);
    }
    res.send(result);
  })
})

router.get('/mealType/:typeID', function(req, res, next) {
  var query = "SELECT MealType FROM MealTypes WHERE MealTypeID =" + req.params.typeID;
  db(query, (error, result, fields) => {
    if(error) {
      res.status(500).send(error);
    }
    res.send(result);
  })
})

router.get('/foodName/:foodID', function(req, res, next) {
  var query = "SELECT FoodName FROM Foods WHERE FoodID =" + req.params.foodID;
  
  db(query, (error, result, fields) => {
    if(error) {
      res.status(500).send(error);
    }
    //console.log(result);
    res.send(result);
  })
})

router.post('/newMeal', function(req, res, next) {
  var query = "INSERT INTO MEALS (MealDate, MealTypeID, UserID) VALUES ('" + req.body.date + "', " + req.body.mealType + " , 1)";
  
  
  db(query, (error, result) => {
    if (error) {
      res.status(500).send(error);
    }
    //console.log(result);
    addFoodFromMeal(result.insertId);
    
  });
  
  function addFoodFromMeal (mealID)  {
    var foodQuery = "INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram) VALUES ('" + req.body.foodName + "', " + req.body.gramsPerServing + ", " + req.body.caloriesPerGram + ");";
    db(foodQuery, (error, result) => {
      if (error) {
        res.status(500).send(error);
      }
      var foodID = result.insertId;
      addMealFoodFromMeal(mealID, foodID);
    });
  }
  
  function addMealFoodFromMeal (mealID, foodID) {
    var mealsFoodsQuery = "INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed) VALUES (" + mealID + ", " + foodID + ", " + req.body.gramsConsumed + ");";
    db(mealsFoodsQuery, (error, result) => {
      if (error) {
        res.status(500).send(error);
      }
      res.redirect('/journal');
    });
  }
});


module.exports = router;