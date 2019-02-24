let sql = require('../db_connection');

var getRnd = function getRnd(min, max){
    return Math.floor(Math.random()*max )+ min;
}

var i = 0;

// ====== Mock Meal ======
var meal = new Object();
var insertMeal = function insertMeal(meal, err){
    sql("INSERT INTO MEALS"
        + "(MealDate, MealTypeID, UserID)"
        + "VALUES ("
        + "'" + meal.mealDate + "', "
        + "'" + meal.mealTypeID + "', "
        + "'" + meal.userID + "'"
        + ")"
    );

    if (err) throw err;
}

var getRndDate = function getRndDate(start, end){
    start = Date.parse(start);
    end   = Date.parse(end);
    d  = new Date(start + Math.random()*(start - end));
    
    var format = function format(x){
        if(x < 10){
            x = '0' + x;
        }

        return x;
    }
    
    return d.getFullYear() + '-' + format(d.getMonth()) + '-' + format(d.getDate());
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