$(document).ready(function(){
  $.getJSON("http://localhost:3000/api/v1/meals/all", (result)=>{
    $.each(result, (i, field) => {
      var meal = "<div class='meal'><h3>MealID = " 
        + field.MealID
        + "</h3><br />"
        + "<h3>Date = " + field.MealDate + "</h3><br />"
        + "<h3>MealTypeID = " + field.MealTypeID + "</h3><br />"
        + "<h3>UserID = " + field.UserID + "</h3><br /></div>";
      $("#mealList").append(meal);
    });
  });
});


 /*$(document).ready(function(){
      alert();
        $.getJSON("http://localhost:3000/api/v1/film/all", (result)=>{
          $.each(result, (i, field) => {
            var title = "<div class='film'><h3 film_id="
              +field.film_id
              +" style='cursor: pointer'>"+field.title+"</h3>"
              +"<div class='info' hidden='true'>" + field.description
              +"<br />Rating: "
              + field.rating
              +"<br />Release Year: "
              + field.release_year
              + "</div></div>";
            $("#list").append(title);
          });
          $('.film').on('click', function(){
            if ($(this).children('.info').is(':hidden')){
              $('.info').hide();
              $(this).children('.info').show();
            } else {
              $(this).children('.info').hide();
            }
          });
        });
      });*/