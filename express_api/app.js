var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
// エラー処理用モジュール
const CustomError = require('./my_modules/customerror')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const corsOptions = {
  origin: process.env.FRONT_SERVER,
  optionsSuccessStatus: 200
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors(corsOptions))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', indexRouter);
app.use('/api/v1/users', usersRouter);

// 404 Errorで作成したモジュールを呼び出す
app.use(function(req, res, next) {
  next(new CustomError('Endpoint not found.', 404))
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({message: err.message})
})

module.exports = app;
