$(document).ready(function() {
  $('#searchbtn').click(function() { 
    let keyWord = $('#searchField').val();
    $("#foodlist").empty();
    searchFood(keyWord)
  });


  
});


function searchFood(keyWord){

  // alert(keyWord);

  $.ajax({
    url: "/api/v1/food/search/" + keyWord,
    dataType: 'json',
    async: false,
    success: function(results) {
      // alert(JSON.stringify(results));
      let isEmpty = results.length == 0
            ? true : false;
      // alert(isEmpty);
      if(!isEmpty){
        for(i=0; i<results.length; i++){
          let fl_item= 
            "<div class='foodlist_item'>"
            + "<a id='" + results[i].FoodName + " herf='/foods/detail?foodName=" + results[i].FoodName + "&FoodID=" + results[i].foodID + ">"
            + "<img class='foodicon' src='/img/placeholder.png' alt='Food Icon'>"
            + "<div class=foodlist_itemProperty>"
            + "<ul>"
            + "<il class='foodlist_itemName'> "+ results[i].FoodName + "</il> </br> </br>"
            + "<il> Serving Size: " + results[i].GramsPerServing + "grams </il> </br>"
            + "<il> Calories: " + results[i].CaloriesPerGram + " per gram </il>"
            + "</ul> </div> </a> </div>"
          $("#foodlist").append(fl_item);
        }  
      } 
      else $("#foodlist").append('Food Item Not found.');
    }
  })
}