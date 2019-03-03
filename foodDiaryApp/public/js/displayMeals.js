$(document).ready(function(){
  $.getJSON("http://localhost:3000/api/v1/meals/all", (result)=>{
    $.each(result, (i, field) => {
      console.log(field.MealID);
      getMealFoods(field.MealID);
      var meal = "<div class='meal'><h3>MealID = " 
        + field.MealID
        + "</h3><br />"
        + "<h3>Date = " + field.MealDate + "</h3><br />"
        + "<h3>MealTypeID = " + field.MealTypeID + "</h3><br />"
        + "<h3>UserID = " + field.UserID + "</h3><br /></div>";
      $("#mealList").append(meal);
    });
    
   /* $.getJSON("http://localhost:3000/api/v1/meals/mealsFoodsID/1", (result) => {
      console.log(result);
    });*/
  });
  
  function getMealFoods (mealID) {
    $.getJSON("http://localhost:3000/api/v1/meals/mealsFoodsID/" + mealID , (result) => {
      console.log(result);
    })
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

