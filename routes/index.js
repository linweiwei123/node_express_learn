var express = require('express');
var router = express.Router();

var winstonLogger = require('../config/logger');

/* GET home page. */
router.get('/', function(req, res, next) {
    winstonLogger.debug('[debug],错误了');
    winstonLogger.info('[info],错误了');
    winstonLogger.error('[error],错误了');

    // process.nextTick(function(){
    //     throw new Error('Kaboom!'); });

    res.render('index',{title:'express'})

});

router.get('/wsapp', function(req, res, next) {
    winstonLogger.debug('[debug],错误了');
    winstonLogger.info('[info],错误了');
    winstonLogger.error('[error],错误了');

    // process.nextTick(function(){
    //     throw new Error('Kaboom!'); });

    res.render('chat',{title:'chat'})

});

router.get('/wsapp/admin', function(req, res, next) {
    winstonLogger.debug('[debug],错误了');
    winstonLogger.info('[info],错误了');
    winstonLogger.error('[error],错误了');

    // process.nextTick(function(){
    //     throw new Error('Kaboom!'); });

    res.render('chartadmin',{title:'chatadmin'})

});

module.exports = router;
