var express = require('express');
var router = express.Router();

/* Get login fail page */
router.get('/', function(req, res, next) {
    res.render('registrationFail', { title: 'Registration failure.' });
});

module.exports = router;
