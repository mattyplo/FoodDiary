var express = require('express');
var router = express.Router();
var auth = require('../control/auth');


// detail
router.get('/:foodID', auth, function(req, res, next) {
  res.render('foods_detail',{
    title:'Food Details',

  });

});

module.exports = router;
