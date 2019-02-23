let sql = require('./db_connection');

// ====== Mock Food ======
var foodItem = new Object();
var inserFoodItem = function inserFoodItem(foodItem, err){
    sql("INSERT INTO Foods"
        + "(FoodName, GramsPerServing, CaloriesPerGram)"
        + "VALUES ("
        + "'" + foodItem.foodName + "', "
        + "'" + foodItem.caloriesPerGram + "', "
        + "'" + foodItem.gramsPerServing + "'"
        + ")"
    );

    if (err) throw err;
}

var getRnd = function getRnd(min, max){
    return Math.floor(Math.random()*(max*100)/100) + min;
}

var i = 0;
while (i < 50){
    foodItem.foodName = 'Food' + i;
    foodItem.caloriesPerGram = getRnd(0, 1000);
    foodItem.gramsPerServing = getRnd(1, 250);

    inserFoodItem(foodItem);
    i++;
}

sql('SELECT * FROM foods', function(err, rows){
        console.log(rows);
});
