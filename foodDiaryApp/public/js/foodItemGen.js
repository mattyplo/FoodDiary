$(function() {
    let url = window.location.pathname;
    let foodID = url.substring(url.lastIndexOf('/') + 1);

    $("#fooditem").empty();
    getFood(foodID);
});

function getFood(foodID){
    $.ajax({
        url: "/api/v1/food/detail/" + foodID,
        dataType: 'json',
        async: false,
        success: function(result) {
            let isEmpty = result.length == 0
                ? true : false;
            if(!isEmpty){
                let foodItem= 
                "<ul id= 'fooditem'>"
                + "<li> Item Description: "+ result[0].FoodName + "</li>"
                + "<li> Serving Size: " + result[0].GramsPerServing + "grams </li>"
                + "<li> Calories per Serving: " + result[0].CaloriesPerGram * result[0].GramsPerServing + "</li>"
                + "</ul>"
                // console.log(foodItem);
                $("#fooditem").append(foodItem);
            }
            else $("#fooditem").append('Something is wrong, we can not find this food.');
        }
    });
}