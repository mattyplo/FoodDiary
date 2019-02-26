// TL;DR foodManipulation({foodName: , gPerServing: , cPerGram: })

let sql = require('../model/db_connection');

let findFoodID = "SELECT FoodID FROM foods WHERE FoodName = '"+ food.foodName +"';";
// console.log(food.foodName);

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
        console.log(result);
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
        console.log(result);
    })
}

// Take a food object, use foodName to find if food exist, if exist update, if not add.
function foodManipulation(food) {
sql(findFoodID, (err, result) => {
    var foodID = result[0].FoodID;
    if (err) throw err;
    if (result === 'null')
        addFood(food);
    else 
        updateFood(food, foodID);
});
}

module.exports = foodManipulation;