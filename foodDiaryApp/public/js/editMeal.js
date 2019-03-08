$(document).ready(function() {
  
  // open the form when button is clicked
  function openForm() {
    document.getElementById("editMealForm").style.display = "block";
  }
  
  // close the form when button is clicked
  function closeForm() {
    document.getElementById("editMealForm").style.display = "none";
  }
  
  var editMealButton = document.getElementById("editMeal");
  var closeFormButton = document.getElementById("closeFormButton");
  
  editMealButton.addEventListener("click", openForm, false);
  closeFormButton.addEventListener("click", closeForm, false);
}