$(document).ready(function(){
  
});


 $(document).ready(function(){
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
      });