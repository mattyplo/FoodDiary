var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var registerUserRouter = require('./routes/users');
var registrationPageRouter = require('./routes/registrationPage');
var journalRouter = require('./routes/journal');
var mealAPIRouter = require('./routes/mealAPIRouter');
var foodsRouter = require('./routes/foods');
var deleteFoodRouter = require('./routes/deleteFood');
var searchFoodRouter = require('./routes/searchFood');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/addUser', registerUserRouter);
app.use('/register', registrationPageRouter);
app.use('/journal', journalRouter);
app.use('/foods', foodsRouter);
app.use('/foods/del', deleteFoodRouter);
app.use('/foods/search', searchFoodRouter);
app.use('/api/v1/meals', mealAPIRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
