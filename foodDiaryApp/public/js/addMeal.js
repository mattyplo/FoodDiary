$(document).ready(function(){
 
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
  function newOrExistingChecked() {
    if (this.value === "new") {
      document.getElementById("new").style.display = "block";
      document.getElementById("existing").style.display = "none";
    } else if (this.value === "existing") {
      document.getElementById("new").style.display = "none";
      document.getElementById("existing").style.display = "block";
    }
  }
  
  
  
  var addMealButton = document.getElementById("addMeal"); 
  var closeFormButton = document.getElementById("closeFormButton");
  var radios = document.querySelectorAll('input[type=radio][name="newOrExisting"]');
  
  //var newRadio = document.getElementById("new");
  //var existingRadio = document.getElementById("existing");
  
  addMealButton.addEventListener("click", openForm, false);
  closeFormButton.addEventListener("click", closeForm, false);
  Array.prototype.forEach.call(radios, function(radio) {
   radio.addEventListener('change', newOrExistingChecked);
  });
  
});