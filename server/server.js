const cookieParser = require('cookie-parser')
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const mentoring = require('./routes/mentoring/index');
const user = require('./routes/user/index');
app.set('port', 8080);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', user);
app.use('/', mentoring);
app.listen(app.get('port'), function () {
  console.log('Example app listening on' + app.get('port') + 'port');
})