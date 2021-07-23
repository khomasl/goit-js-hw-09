const Joi = require ('joi');

const passwordSchema = Joi.string().min(3).max(10).alphanum();

console.log('passwordSchema :>> ', passwordSchema.validate('qwe'));
//////////////////
const express = require('express');

const app = express();

const listener = app.listen( 4444, () => {
    console.log(`Веб-сервер запущен на порте ${listener.address().port}`)
    });
app.use('*', (req, res) => {
    console.log('Был запрос от браузера');
    res.send('<h1>Ну это мол HTML тебе ответ</h1>');
});    