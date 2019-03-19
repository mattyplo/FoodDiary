$(function() {
  //toggle to show/hide form
  btnToggle("#addItem", "#foodAddEditForm");
  btnToggle("#editItem", "#foodAddEditForm");
  btnToggle("#deleteItem", "#foodDelForm");

  //close forms
  btnClose("#closeAEForm","#foodAddEditForm");
  btnClose("#closeDelForm","#foodDelForm");

  //Food Add/Edit Form
  $('#addEditBtn').click(function() {
    let food = [];
    food[0] = $('#foodName').val();
    food[1] = $('#gPerServing').val();
    food[2] = $('#cPerGram').val();
    // alert(food);
    foodAE(food);
    slowClose("#addEditBtn","#foodAddEditForm");
  })

  //Food Delete Form
  $('#delFood').click(function() {
    let foodName = $('#delFoodName').val();

    foodDel(foodName);
    slowClose("#delFood","#foodDelForm");
  })  
});

function btnToggle(btn, form){
  $(btn).click(function() {
    $(form).toggle();
    $("#foodasidehead").css({"padding":"0px"});
  });
}

function btnClose(btn, form){
  $(btn).click(function() {
    $(form).hide();
  });
}

function slowClose(btn, form){
  $(btn).click(function() {
    $(form).hide(888);
  })
}

function foodAE(food){

  $.ajax({
    url: "/api/v1/food/man/" + food[0]
      + "," + food[1]
      + "," + food[2],
    dataType: 'json',
    async: false,
    success: function(result) {
      console.result;
      alert(result);
    }
  });    
}

function foodDel(foodName){
  $.ajax({
    url: "/api/v1/food/del/" + foodName,
    dataType: 'json',
    async: false,
    success: function(result) {
      console.result;
      alert(result);
    }
  });  
}