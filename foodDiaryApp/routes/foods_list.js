var express = require('express');
var router = express.Router();
var auth = require('../control/auth');


router.get('/', auth, function(req, res, next) {

  res.render('foods_list', {
    title:'FOODS',
  });

});


module.exports = router;
