var express = require('express');

var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('foods_list', {
    title:'FOODS',
  });

});


module.exports = router;
