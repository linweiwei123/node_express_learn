/**
 * Created by yitala on 2018/2/6.
 */
const winston = require("winston");
const ENV = process.env.NODE_ENV;


var level = 'debug';

switch (ENV){
    case 'development':level = 'debug';break;
    case 'production':level = 'info';break;
    default:level = 'debug';break;
}

// const logger = createLogger({
//     level: level,
//     format: combine(
//         label({ label: 'winston' }),
//         timestamp(),
//         myFormat
//     ),
//     debugStdout: true,
//     transports: [
//         new transports.Console(),
//         new transports.File({ filename: 'log/combined.log' })
//     ]
// });


const logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: level,
            stderrLevels: ['error','info'],
            timestamp: function () {
                return (new Date()).toISOString();
            }
        })
    ]
});

module.exports = logger;
