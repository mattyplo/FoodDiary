//please run this on sequence 

let sql = require('../db_connection');

var getRnd = function getRnd(min, max){
    return Math.floor(Math.random()*max )+ min;
}

var i = 0;

// ====== Mock Meal ======
var meal = new Object();
var insertMeal = function insertMeal(meal){
    sql("INSERT INTO MEALS"
        + "(MealDate, MealTypeID, UserID)"
        + "VALUES ("
        + "'" + meal.mealDate + "', "
        + "'" + meal.mealTypeID + "', "
        + "'" + meal.userID + "'"
        + ")"
        , function (err, rows){}
    );
}

var getRndDate = function getRndDate(start, end){
    start = Date.parse(start);
    end   = Date.parse(end);
    d  = new Date(start + Math.random()*(start - end));
    
    function format(x){ return x < 10 ? '0' + x : x}
    
    return d.getFullYear() + '-' + format(d.getMonth() + 1) + '-' + format(d.getDate());
}

//console.log(getRndDate('2019-02-23', '2019-01-01'));

i = 0;
while (i < 50){
    meal.mealDate = getRndDate('2019-01-01', '2018-11-01');
    meal.mealTypeID  = getRnd(1, 4);
    meal.userID  = getRnd(1, 5);

    insertMeal(meal);
    i++;
}