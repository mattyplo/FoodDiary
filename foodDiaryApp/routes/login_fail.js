var express = require('express');
var router = express.Router();

/* Get login fail page */
router.get('/', function(req, res, next) {
    res.render('login_fail', { title: 'Login failure.' });
});

module.exports = router;
