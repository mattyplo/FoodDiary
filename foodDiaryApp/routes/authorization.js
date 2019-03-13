var express = require('express');
var meals = require('../model/mockMeals');
var router = express.Router();
var db = require('../model/db_connection');

var auth = function(req, res, next) {
  if (req.session && req.session.user === "amy" && req.session.admin) {
    return next();
  }
  else {
    return res.sendStatus(401);
  }
}

module.exports = router;