$(document).ready(function(){
  var meals = {};
 
  $.getJSON("/api/v1/meals/all", (result)=>{
    $.each(result, (i, field) => {
      // capture meal date and format
      var mealDate = field.MealDate;
      var tIndex = mealDate.indexOf('T');
      var mealDate = mealDate.substring(0, tIndex);
      var mealFoods = [];
      var foods = []
      var foodName;
      var mealType = getMealType(field.MealTypeID);
      //meals.push(mealDate);
      mealFoods = getMealFoods(field.MealID);
      if(meals[mealDate]) {
      } else {
        meals[mealDate] = [];
      }
      var mealTypes = {};
      mealTypes[mealType];
      
      if (mealFoods.length > 0) {
        $.each(mealFoods, (i, foodId) => {
          foodName = getFoodName(foodId);
          foods.push(foodName);
        });  
        mealTypes[mealType] = foods;
      
        meals[mealDate].push(mealTypes);
      }

    });
    outputMealData(meals);
   
  });
  
  function outputMealData(mealData) {

    sortedMeals = sortMealsByDate(mealData);
    $.each(sortedMeals, (i, field) => {
      var meal = "<div class='meal'><h3>" + i + "</h3><br />";
      $.each(field, (j, item) => {
        $.each(item, (mealType, foods) => {
          meal += "<h4>" + mealType + "</h4><br /><ul class='ulMeal'>";
          $.each(foods, (l, food) => {
            meal += "<li class='liMeal'>" + food;
          })
          meal += "</ul>"
        })
        meal += "<div>"
      })
      $("#mealList").append(meal);
    });
  }
  
  function sortMealsByDate(mealData) {
    sortedMeals = {};
    Object.keys(mealData).sort(function(a, b) {
      return new Date(b) - new Date(a);
    }).forEach(function(key) {
      sortedMeals[key] = mealData[key];
    });
    return sortedMeals;
  }
  
  function getMealData (userID) {
    var mealData
    $.ajax({
      url: "/api/v1/meals/mealInfo/" + 1,
      dataType: 'json', 
      async: false, 
      success: function(json){ 
        //console.log(json); 
        mealData = json;
      }
    });
    
    return mealData;
  }
  
  function getMealType (typeID) {
    // Retrieve the MealType given the MealTypeID
    var mealType
    $.ajax({ 
      url: "/api/v1/meals/mealType/" + typeID, 
      dataType: 'json', 
      async: false, 
      success: function(json){ 
        //console.log(json[0].FoodName);  
        mealType = json[0].MealType;  
      }
    });
    return mealType;
  }
  
  function getFoodName (foodID) {
    // Retrieve the FoodName given the foodID
    var foodName
    $.ajax({ 
      url: "/api/v1/meals/foodName/" + foodID, 
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
      url: "/api/v1/meals/mealsFoodsID/" + mealID, 
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

