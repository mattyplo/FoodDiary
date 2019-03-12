$(document).ready(function(){
  $("#foodlist").getJSON('/foods/search', (results) => {
    
    for(i=0; i<results.length; i++){
      ("#foodlist").innerHTML = 
        "<div class='foodlist_item'>"
        + "<a id='" + results[i].FoodName + " herf='/foods/detail?foodName=" + results[i].FoodName + "&FoodID=" + results[i].foodID + ">"
        + "<img class='foodicon' src='/img/placeholder.png' alt='Food Icon'>"
        + "<div class=foodlist_itemProperty>"
        + "<ul>"
        + "<il class='foodlist_itemName'> "+ results[i].FoodName + "</il> </br> </br>"
        + "<il> Serving Size: " + results[i].GramsPerServing + "grams </il> </br>"
        + "<il> Calories: " + results[i].CaloriesPerGram + " per gram </il>"
        + "</ul> </div> </a> </div>"
    }
  })
})