$(document).ready(function() {
  
  // open the form when button is clicked
  function openForm() {
    document.getElementById("editMealDiv").style.display = "block";
    displayMeals();
  }
  
  function displayMeals() {
    
    var selectMenu = "<select name='meal'>";
    $.getJSON("/api/v1/meals/all", (result)=>{
      $.each(result, (i, field) => {
        selectMenu += "<option value='" + field.MealID + "'> " + field.MealDate + "</option>";
        /*
          MealDate
          MealID
          MealTypeID
        */
    
      });
      console.log(selectMenu);
      selectMenu += "</select>";
      $("#editMealForm").append(selectMenu);
      //outputMealData(meals);
   
    });
  }
  
  // close the form when button is clicked
  function closeForm() {
    document.getElementById("editMealDiv").style.display = "none";
  }
  
  var editMealButton = document.getElementById("editMeal");
  var closeFormButton = document.getElementById("closeEditFormButton");
  
  editMealButton.addEventListener("click", openForm, false);
  closeFormButton.addEventListener("click", closeForm, false);
});