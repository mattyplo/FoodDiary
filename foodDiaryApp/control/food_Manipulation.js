// TL;DR foodManipulation({foodName: , gPerServing: , cPerGram: })

let sql = require('../model/db_connection');

function foodManipulation(food) {

    // Update Food With Given FoodID
    let updateWithID = "UPDATE foods SET "
                    + "GramsPerServing = "
                    + food.gPerServing
                    + ", CaloriesPerGram = "
                    + food.cPerGram
                    + " WHERE FoodID = "; 

    function updateFood(food, foodID) {
        //updateUsing foodID from db
        sql(updateWithID + foodID, (err, result) => {
            if (err) throw err;
            // console.log(result);
        }) ;
    }

    // Add Food
    let query_addFood = "INSERT INTO Foods"
                + "(FoodName, GramsPerServing, CaloriesPerGram) "
                + "VALUES ("
                + "'" + food.foodName + "', "
                + food.gPerServing + ", "
                + food.cPerGram + ")";

    function addFood(food) {
        sql(query_addFood, (err, result) => {
            if (err) throw err;
            // console.log(result);
        })
    }

    // Take a food object, use foodName to find if food exist, if exist update, if not add.
    let findFoodID = "SELECT FoodID FROM foods WHERE FoodName = '"
                    + food.foodName +"';";

    sql(findFoodID, (err, result) => {

        if (err) throw err;
        
        var isFoodEmpty = food.foodName === 'undefined' || food.foodName.length == 0
                        ? true : false;
        if (typeof result === 'undefined' || result.length == 0 && isFoodEmpty === false){
            console.log("new food");
            addFood(food);
        } else if (isFoodEmpty){
            console.log("empty")
        } else {
            var foodID = result[0].FoodID;
            updateFood(food, foodID);
        }
    });
}

function foodSearch(food) {
    let getFood = "SELECT * FROM foods WHERE FoodName = '"
                + food.foodName +"';";
    
    sql(getFood, (err, result) => {

        if (err) throw err;

        console.log(result);
    }) 
}

module.exports = {man : foodManipulation, search : foodSearch};