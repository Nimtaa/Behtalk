var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/users');
var sending = require('./routes/sending');
var login = require('./routes/login');
var deletion = require('./routes/deleteUser');
var update = require('./routes/updateUser');
var sort = require('./routes/sort');

mongoose.connect(config.mongoUri);

var app = express();

//requiring jwt
var jwt = require('jsonwebtoken');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/sending' , sending);
app.use('/login' , login);
app.use('/delete' ,deletion);
app.use('/update',update);
app.use('/sort',sort);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
