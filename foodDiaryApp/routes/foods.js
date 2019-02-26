var express = require('express');
//let fm = require('../control/food_Manipulation')
var router = express.Router();

const util = require('util');

function foodData() {
    var x = document.getElementById('food').onsubmit();
    console.log(x);
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('foods', {
    title:'FOODS',
  });
});



module.exports = router;

//set space DEBUG=expressparrot:* npm start