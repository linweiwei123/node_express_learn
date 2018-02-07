var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morganLog = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mail = require('./cmodules/mail');
var winstonLog = require('./config/logger');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('trust proxy', true);
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morganLog('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log(req.url);
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {

  winstonLog.error('[error] error handler：'+ err.stack);

  //异常内容发送邮件通知
  // mail.sendMail({
  //     subject:'node-express-learn异常',
  //     text:err.stack
  // });

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

process.on('uncaughtException', function(err) {
    winstonLog.error('[error] uncaughtException触发：'+ err.stack);
    mail.sendMail({
        subject:'ad-activity工程异常',
        text:err.stack
    });
});

module.exports = app;
