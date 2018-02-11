var winstonLogger = require('../config/logger');
var yitala = require('yitala-util');

function init(app){



    /* GET home page. */
    app.get('/', function(req, res, next) {
        // process.nextTick(function(){
        //     throw new Error('Kaboom!'); });
        yitala.speak();
        res.render('index',{title:'express'})

    });

    app.get('/wsapp', function(req, res, next) {
        winstonLogger.debug('[debug],错误了');
        winstonLogger.info('[info],错误了');
        winstonLogger.error('[error],错误了');

        // process.nextTick(function(){
        //     throw new Error('Kaboom!'); });

        res.render('chat',{title:'chat'})

    });

    app.get('/wsapp/admin', function(req, res, next) {
        winstonLogger.debug('[debug],错误了');
        winstonLogger.info('[info],错误了');
        winstonLogger.error('[error],错误了');

        // process.nextTick(function(){
        //     throw new Error('Kaboom!'); });

        res.render('chartadmin',{title:'chatadmin'})

    });

    app.get('/any|some(thing)?|anyone', function(req, res, next) {

        res.render('any/index')

    });
}


module.exports = {
    init
};
