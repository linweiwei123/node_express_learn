var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
var winstonLogger = require('../config/logger');

/* GET home page. */
router.get('/', function(req, res, next) {
    winstonLogger.debug('[debug],错误了');
    winstonLogger.info('[info],错误了');
    winstonLogger.error('[error],错误了');

    process.nextTick(function(){
        throw new Error('Kaboom!'); });

    res.render('index',{title:'express'})

});

module.exports = router;
