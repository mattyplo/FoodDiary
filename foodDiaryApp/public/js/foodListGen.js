$(function() {
  $('#searchbtn').click(function() { 
    let keyWord = $('#searchField').val();
    $("#foodlist").empty();
    searchFood(keyWord);
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
            + "<a href='/foods/detail/" + results[i].FoodID + "'>"
            + "<img class='foodicon' src='/img/placeholder.png' alt='Food Icon'>"
            + "<div class=foodlist_itemProperty>"
            + "<ul>"
            + "<li class='foodlist_itemName'> "+ results[i].FoodName + "</li> </br>"
            + "<li> Serving Size: " + results[i].GramsPerServing + "grams </li>"
            + "<li> Calories: " + results[i].CaloriesPerGram + " per gram </li>"
            + "</ul> </div> </a> </div>"
          $("#foodlist").append(fl_item);
        }  
      } 
      else $("#foodlist").append('Food Item Not found.');
    }
  });
}