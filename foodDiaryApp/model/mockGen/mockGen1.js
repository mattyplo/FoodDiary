
//please run this on sequence 

let sql = require('../db_connection');

// ====== Mock Food ======
var foodItem = new Object();
var insertFoodItem = function insertFoodItem(foodItem){
    sql("INSERT INTO FOODS"
        + "(FoodName, GramsPerServing, CaloriesPerGram)"
        + "VALUES ("
        + "'" + foodItem.foodName + "', "
        + "'" + foodItem.caloriesPerGram + "', "
        + "'" + foodItem.gramsPerServing + "'"
        + ")"
        , function (err, rows){}
    );
}

var getRnd = function getRnd(min, max){
    return Math.floor(Math.random()*max )+ min;
}

var i = 0;
while (i < 50){
    foodItem.foodName = 'Food' + i;
    foodItem.caloriesPerGram = getRnd(0, 1000)*100/100;
    foodItem.gramsPerServing = getRnd(1, 250)*100/100;

    insertFoodItem(foodItem);
    i++;
}

// ====== Mock User ======
var user = new Object();
var insertUser = function insertUser(user){
    sql("INSERT INTO USERS"
        + "(FirstName, LastName, UserName, Password)"
        + "VALUES ("
        + "'" + user.firstName + "', "
        + "'" + user.lastName + "', "
        + "'" + user.userName + "', "
        + "'" + user.password + "'"
        + ")"
        , function (err, rows){}
    );
}

i = 0;
while (i < 5){
    user.firstName = 'FirstName' + i;
    user.lastName  = 'LastName' + i;
    user.userName  = 'UserName' + i;
    user.password  = getRnd(10000, 20000);

    insertUser(user);
    i++;
}

// ====== Mock MealType ======
let mealType = ['breakfast','lunch','dinner','snack'];
var insertMealType = function insertMealType(meal){
    sql("INSERT INTO MEALTYPES"
        + "(MealType)"
        + "VALUES ("
        + "'" + meal + "'"
        + ")"
        , function (err, rows){}
    );
}

for (i = 0; i < mealType.length; i++){
    insertMealType(mealType[i]);
}

