$(document).ready(function(){
  var meals = {};
  
  $.getJSON("http://localhost:3000/api/v1/meals/all", (result)=>{
    $.each(result, (i, field) => {
      //console.log(field.MealID);
      //console.log(getMealFoods(field.MealID));
      var mealDate = field.MealDate;
      var mealFoods = [];
      var foods = []
      var foodName;
      //console.log(mealFoods);
      // string time from Date
      var tIndex = mealDate.indexOf('T');
      var mealDate = mealDate.substring(0, tIndex);
      //meals.push(mealDate);
      mealFoods = getMealFoods(field.MealID);
      meals[mealDate];
      if (mealFoods.length > 0) {
        $.each(mealFoods, (i, foodId) => {
          foodName = getFoodName(foodId);
          foods.push(foodName);
        });  
        meals[mealDate] = foods;
      }

      //console.log(meals);
      
      var meal = "<div class='meal'><h3>MealID = " 
        + field.MealID
        + "</h3><br />"
        + "<h3>Date = " + field.MealDate + "</h3><br />"
        + "<h3>MealTypeID = " + field.MealTypeID + "</h3><br />"
        + "<h3>UserID = " + field.UserID + "</h3><br /></div>";
      $("#mealList").append(meal);
    });
    
    console.log(meals);
  });
  
  function getFoodName (foodID) {
    // Retrieve the FoodName given the foodID
    var foodName
    $.ajax({ 
      url: "http://localhost:3000/api/v1/meals/foodName/" + foodID, 
      dataType: 'json', 
      async: false, 
      success: function(json){ 
        //console.log(json[0].FoodName);  
        foodName = json[0].FoodName;  
      }  
    });
    
    //console.log(foodNameIds);
    return foodName;
    
  }
  
  // returns FoodIDs in particular meal given a mealID
  function getMealFoods (mealID) {
   
    var mealData = []
    $.ajax({ 
      url: "http://localhost:3000/api/v1/meals/mealsFoodsID/" + mealID, 
      dataType: 'json', 
      async: false, 
      success: function(json){ 
        //console.log(json);  
        mealData = json;  
      }  
    });
    
    var foodIds = []
    $.each(mealData, (i, field) => {
      foodIds.push(field.FoodID);
    })
    
    return foodIds;
    
  }

});

