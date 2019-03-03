
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Slim Pickins Journal</title>

<!--Remy Sharp Shim --> 
<!--[if lte IE 9]> 
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js" type="text/javascript" >
</script> 
<![endif]-->
<link href="css/styles.css" type= "text/css" rel="stylesheet">
<script src="js/addMeal.js"></script>  
  
</head>

<body>
    
    
   
    
    <div class="wrapper">
        
    <header>        

        <?php require_once 'header.php'; ?> 
        <?php require '../Controller/initialize.php';?>
        <?php require_login();?>
        <?php require_once '../Model/journalModel.php'; ?>

     </header>

         <main>
        
        <button id="addMeal">Add Meal</button>
        
        <div class="form-popup" id="myForm">
          <form action="../Controller/formHandler.php" class="form-container" method="post">
            <h1>Add Meal</h1>

            <label for="date"><b>Date</b></label>
            <input type="text" placeholder="MM/DD/YYYY" name="date" required>
            <label for="meal"><b>Meal</b></label>
            <select name="meal">
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
            </select>
            <br>
            <br>
            
            <input type="radio" name="newOrExisting" value="new" checked> New <br>
            <input type="radio" name="newOrExisting" value="existing"> Existing <br>
            
            <div id="new">
              <br>
              <label for="foodItem"><b>Food Name</b></label>
              <input type="text" name="foodName">
            </div>
            
            <div id="existing">
              <br>
              <select name="FoodID">
                <?php
                  foreach ($allFoods as $food) {
                  echo renderFoodToOption($food);
                  }
                ?>
              </select>
              <br>
              <br>
            </div>
            
            <ul>
            <li>
            <label for="caloriesPerGram"><b>Grams Per Calorie</b></label>
            <input type="number" name="caloriesPerGram" step="0.01">
            </li>
            <li>
            <label for="gramsPerServing"><b>Grams Per Serving</b></label>
            <input type="number" name="gramsPerServing" step="0.01">
            </li>
            <li>
            <label for="gramsConsumed"><b>Grams Consumed</b></label>
            <input type="number" name="gramsConsumed">
            </li>
            </ul>

            <br>
            <br>
            <button type="submit" class="btn">Add Meal</button>
            <button type="button" class="btn cancel" id="closeFormButton" >Cancel Add Meal</button>
          </form>
        </div>
           
        <?php
          foreach($meals as $key=>$val){ 
            echo "<div><h3>";
            echo $key . "</h3><ul>";
            foreach($val as $k=>$v){ 
              echo "<li><h4>" . $k . "</h4></li>";
              foreach($v as $f){
                echo "<li>" . $f . "</li>";
              }
            }

            echo "</ul></div>";

            }
        ?>
             
        </main>
       
        
        
        <footer>            
            <?php require_once 'footer.php' ?>        
        </footer>
    
    
  
        </div>    <!--end wrapper-->
       
    
</body>
    
    
</html>