var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  title:'Dietary Food Journal'
  var incorrectLoginMsg = req.query.valid;
  res.render('index', { title: 'Express', incorrectLoginMsg: incorrectLoginMsg });
});

module.exports = router;
