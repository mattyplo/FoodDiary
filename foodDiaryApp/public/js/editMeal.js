$(document).ready(function() {
  
  // open the form when button is clicked
  function openForm() {
    document.getElementById("editMealDiv").style.display = "block";
    displayMeals();
    document.getElementById('mealSelector').addEventListener('change', show_selected);
    var foodName;
    
  }
    
  function show_selected() {
    var selector = document.getElementById('mealSelector');
    var value = selector[selector.selectedIndex].value;
    $.ajax({ 
      url: "/api/v1/meals/foodInfo/" + value, 
      dataType: 'json', 
      async: false, 
      success: function(json){   
        foodName = json[0].FoodName;  
      }  
    })
    console.log(foodName);
    displayTextFields();
  }
  
  // creates a text field, with default value set to food associated with meal chosen from selector option
  function displayTextFields() {
    var fields = "<input type='text' name='foodName' value='" + foodName + "'><br>";
    $("#editMealForm").append(fields);
  }
  
  function displayMeals() {
    
    //var selectMenu = "<select name='meal' id='mealSelector'>";
    $.getJSON("/api/v1/meals/all", (result)=>{
      $.each(result, (i, field) => {
        var selectMenu = "<option value='" + field.MealID + "'> " + field.MealDate + "</option>";
        $("#mealSelector").append(selectMenu);
      });
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