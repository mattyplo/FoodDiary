$(document).ready(function(){
  var meals = [];
  
  $.getJSON("http://localhost:3000/api/v1/meals/all", (result)=>{
    $.each(result, (i, field) => {
      //console.log(field.MealID);
      //console.log(getMealFoods(field.MealID));
      var mealDate = field.MealDate;
      var mealFoods = [];
      var foodName;
      //console.log(mealFoods);
      // string time from Date
      var tIndex = mealDate.indexOf('T');
      var mealDate = mealDate.substring(0, tIndex);
      meals.push(mealDate);
      mealFoods = getMealFoods(field.MealID);
      if (mealFoods.length > 0) {
        $.each(mealFoods, (i, foodId) => {
               console.log(foodId);
               })
        //console.log(mealFoods);
        //foodName = getFoodName(mealFoods);
        //console.log(foodName);
      }
      //console.log(mealFoods);
      //foodName = getFoodName(mealFoods);
      //console.log(foodName);
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
    
    var foodName
    $.ajax({ 
      url: "http://localhost:3000/api/v1/meals/foodName/" + foodID, 
      dataType: 'json', 
      async: false, 
      success: function(json){ 
        //console.log(json);  
        foodName = json;  
      }  
    });
    
    //console.log(foodNameIds);
    return foodNameIds;
    
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
    
    //console.log(foodIds);
    return foodIds;
    
  }

 



/*$(document).ready(function(){
  $.getJSON("http://localhost:3000/api/v1/meals/all", (result)=>{
    $.each(result, (i, field) => {
      var meal = "<div class='meal'><h3>MealID = " 
        + field.MealID
        + "</h3><br />"
        + "<h3>Date = " + field.MealDate + "</h3><br />"
        + "<h3>MealTypeID = " + field.MealTypeID + "</h3><br />"
        + "<h3>UserID = " + field.UserID + "</h3><br /></div>";
      $("#mealList").append(meal);
    });
  });*/
  
  /*var mealData = $.getJSON("http://localhost:3000/api/v1/meals/all", (result)=>{
    return result;
  });*/
  
 
  /*var mealData = $.ajax({ 
      url: "http://localhost:3000/api/v1/meals/all", 
      dataType: 'json', 
      async: false, 
      success: function(json){ 
        console.log(json);  
        return json;
          
      } 
  });
  
  console.log(mealData);*/
});

