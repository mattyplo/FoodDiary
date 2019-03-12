$(document).ready(function(){
  $.getJSON('/api/v1/food/search', (results) => {

    // var obj = JSON.parse(results);

    // console.log("converted search results: " + obj);
    
    for(i=0; i<results.length; i++){
      var obj = JSON.parse(results[i]);
      console.log (obj);
      var fl_item= 
        "<div class='foodlist_item'>"
        + "<a id='" + obj[i].FoodName + " herf='/foods/detail?foodName=" + obj[i].FoodName + "&FoodID=" + obj[i].foodID + ">"
        + "<img class='foodicon' src='/img/placeholder.png' alt='Food Icon'>"
        + "<div class=foodlist_itemProperty>"
        + "<ul>"
        + "<il class='foodlist_itemName'> "+ obj[i].FoodName + "</il> </br> </br>"
        + "<il> Serving Size: " + obj[i].GramsPerServing + "grams </il> </br>"
        + "<il> Calories: " + obj[i].CaloriesPerGram + " per gram </il>"
        + "</ul> </div> </a> </div>"
      $("#foodlist").append(fl_item);
    }
   })
})