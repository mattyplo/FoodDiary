$(document).ready(function(){
    var foods = {};
    $.getJSON('/foods/search', (result) => {
        console.log('this is ' + result[0]);
    })
})