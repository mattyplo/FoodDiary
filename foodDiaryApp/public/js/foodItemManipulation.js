document.addEventListener('DOMContentLoaded', function() {
 
    function openForm() {
      document.getElementById("myForm").style.display = "block";
      document.getElementById("myForm").style.position = "inherit";
    }

    function openDelForm(){
      document.getElementById("myDelForm").style.display = "inline";
      document.getElementById("myDelForm").style.position = "inherit";        
    }
  
    function closeForm() {
      document.getElementById("myForm").style.display = "none";
      document.getElementById("myDelForm").style.display = "none";
    }

    function warning() {
        for ($i = 1; $i < 4; $i++){
            if(confirm("Deletion are permanent! Are you sure to Proceed? ("+(3-$i)+"/3)")
            && $i == 3){
                document.forms.submit();
            }
        }
    }
    
    var openFormButton = document.getElementsByClassName("foodItemManipulation"); 
    var closeFormButton = document.getElementById("closeFormButton");
    
    //add
    openFormButton[0].addEventListener("click", openForm, false);
    //edit
    openFormButton[1].addEventListener("click", openForm, false);
    //delete
    openFormButton[2].addEventListener("click", openDelForm, false);
    closeFormButton.addEventListener("click", closeForm, false);

    var onDelete = document.getElementById("delFood");

    onDelete.addEventListener("click", warning, false);
    
  });