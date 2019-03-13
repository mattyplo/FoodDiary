var auth = function(req, res, next) {
  if (req.session && req.session.admin) {
    return next();
  }
  else {
    return res.sendStatus(401);
  }
}

module.exports = auth;