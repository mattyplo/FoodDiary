let sql = require('../db_connection');

var getRnd = function getRnd(min, max){
    return Math.floor(Math.random()*max )+ min;
}

var i = 0;

// ====== Mock MealsFoods ======
var mealFood = new Object();
var insertMealFood = function insertMealFood(mealFood, err){
    sql("INSERT INTO MEALSFOODS"
        + "(MealID, FoodID, GramsConsumed)"
        + "VALUES ("
        + "'" + mealFood.mealID + "', "
        + "'" + mealFood.foodID + "', "
        + "'" + mealFood.gramsConsumed + "'"
        + ")"
    );

    if (err) throw err;
}

i = 0;
while (i < 150){
    mealFood.mealID = getRnd(1, 50);
    mealFood.foodID  = getRnd(1, 50);
    mealFood.gramsConsumed  = getRnd(1, 1000);

    insertMealFood(mealFood);
    i++;
}