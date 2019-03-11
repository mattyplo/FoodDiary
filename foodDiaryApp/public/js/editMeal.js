$(document).ready(function() {
  
  // open the form when button is clicked
  function openForm() {
    document.getElementById("editMealDiv").style.display = "block";
    displayMeals();
    document.getElementById('mealSelector').addEventListener('change', selectMeal);
    
    var foodName;
    var gramsPerServing;
    var caloriesPerGram;
    var mealID;
    var gramsConsumed;
  }
    
  function selectMeal() {
    var selector = document.getElementById('mealSelector');
    mealID = selector[selector.selectedIndex].value;
    $.ajax({ 
      url: "/api/v1/meals/foodInfo/" + mealID, 
      dataType: 'json', 
      async: false, 
      success: function(json){   
        foodName = json[0].FoodName;  
        gramsConsumed = json[0].GramsConsumed;
        gramsPerServing = json[0].GramsPerServing;
        caloriesPerGram = json[0].CaloriesPerGram;
      }  
    })
    displayTextFields();
    //setMealAttributes();
  }

  /*function setMealAttributes() {
    $.ajax({
      url: "/api/v1/meals/mealInfo/" + mealID,
      dataType: 'json',
      async: false,
      success: function(json) {
        console.log(json[0].GramsPerServing);
        gramsPerServing = json[0].GramsPerServing;
        caloriesPerGram = json[0].GaloriesPerGram;
      }
    })
  }*/
  
  // creates a text field, with default value set to food associated with meal chosen from selector option
  function displayTextFields() {
    var fields = "<input id='foodNameID' type='text' name='foodName' value='" + foodName + "'><br>";
    var hiddenFields = "<input id='hiddenGramsPerServing' type='hidden' name='gramsPerServing' value='" + gramsPerServing + "'><input id='hiddenCaloriesPerGram' type='hidden' name='caloriesPerGram' value='" + caloriesPerGram + "'><input id='hiddenMealID' type='hidden' name='mealID' value='" + mealID + "'><input id='hiddenGramsConsumed' type='hidden' name='gramsConsumed' value='" + gramsConsumed + "'>";
    if(document.getElementById("foodNameID")) {
      document.getElementById('foodNameID').value = foodName;
      document.getElementById('hiddenGramsPerServing').value = gramsPerServing;
      document.getElementById('hiddenCaloriesPerGram').value = caloriesPerGram;
      document.getElementById('mealID').value = mealID;
    } else {
      $("#editMealForm").append(fields);
      $("#editMealForm").append(hiddenFields);
    }
  }
  
  function displayMeals() {

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