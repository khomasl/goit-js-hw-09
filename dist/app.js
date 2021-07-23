"use strict";

var Joi = require('joi');

var passwordSchema = Joi.string().min(3).max(10).alphanum();
console.log('passwordSchema :>> ', passwordSchema.validate('qwe')); //////////////////

var express = require('express');

var app = express();
var listener = app.listen(4444, function () {
  console.log("\u0412\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u043F\u0443\u0449\u0435\u043D \u043D\u0430 \u043F\u043E\u0440\u0442\u0435 ".concat(listener.address().port));
});
app.use('*', function (req, res) {
  console.log('Был запрос от браузера');
  res.send('<h1>Ну это мол HTML тебе ответ</h1>');
});