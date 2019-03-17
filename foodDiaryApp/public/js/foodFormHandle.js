$(function() {
  //toggle to show/hide form
  btnToggle("#addItem", "#foodAddEditForm");
  btnToggle("#editItem", "#foodAddEditForm");
  btnToggle("#deleteItem", "#foodDelForm");

  //close forms
  btnClose("#closeAEForm","#foodAddEditForm");
  btnClose("#closeDelForm","#foodDelForm");

  //slow close after positive action
  slowClose("#addEditBtn","#foodAddEditForm");
  slowClose("#delFood","#foodDelForm");
});

function btnToggle(btn, form){
  $(btn).click(function() {
    $(form).toggle();
  });
}

function btnClose(btn, form){
    $(btn).click(function() {
        $(form).hide();
    });
}

function slowClose(btn, form){
    $(btn).click(function() {
        $(form).hide(500);
    })
}