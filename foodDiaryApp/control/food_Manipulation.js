// TL;DR foodManipulation({foodName: , gPerServing: , cPerGram: })

let sql = require('../model/db_connection');

function foodManipulation(food) {

    // console.log('input is ' + food)

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
        
        //Not Null constraint
        var isFoodEmpty = typeof food.foodName == undefined || food.foodName.length == 0
                        || typeof food.gPerServing == undefined || food.gPerServing.length == 0
                        || typeof food.cPerGram == undefined || food.cPerGram.length == 0
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

// find food by name, return [{FoodID, FoodName, GramsPerServing,CaloriesPerGram}]
function foodSearch(food, callback) {

    let getFood = "SELECT * FROM foods WHERE FoodName = '"
                + food +"';";
    
    sql(getFood, (err, result) => {

        if (err) callback(err, null);
        callback(null, result);
    }); 
}

// Delete food
function foodDelete(food) {
    foodSearch(food, (err, result) => {

        if (err) throw err;

        var isEmpty = typeof result === 'undefined' || result.length == 0 
                ? true : false;
        if (!isEmpty){
            let deleteFood = "DELETE FROM foods WHERE FoodID = "
                           + result[0].FoodID;
            // console.log(deleteFood);
            sql(deleteFood, (err, result) => {});
        } else {
            console.log('no such food');
        }
    });
}

// Check if the food has already been referred on meals
function isConstrainted(food, callback) {
        
    foodSearch(food, (err, result) => {

        if (err) throw err;

        let getCount = "SELECT COUNT(FoodID) AS count FROM mealsfoods WHERE FoodID = "
                     + result[0].FoodID +";";

        sql(getCount, (err, count) => {
            //console.log('count ' + count[0].count);
            var constraint = count[0].count > 0 
                ? true : false;

            if (err) callback(err, null);
            callback(null, constraint);
        }) ;
    });
}

// fuzzy search for food
function fuzzySearch(food, callback) {

    let getFood = "SELECT * FROM foods WHERE FoodName LIKE '%"
                + food +"%';";
    
    sql(getFood, (err, result) => {

        if (err) callback(err, null);
        callback(null, result);
    }); 
}


module.exports = 
    {man : foodManipulation, search : foodSearch, del : foodDelete
        , check : isConstrainted, fuzzySearch : fuzzySearch
    };