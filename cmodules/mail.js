const nodemailer = require('nodemailer');
const emailOptions = require('../config/email');
const logger = require('../config/logger');

function sendMail(options) {

    let transporter = nodemailer.createTransport({
        host: emailOptions.host,
        port: 587,
        secure: false,
        auth: emailOptions.auth
    });

    let mailOptions = {
        from: emailOptions.auth.user,
        to: emailOptions.target,
        subject: options.subject,
        text: options.text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            logger.info('发送邮件失败' + error);
        }
    });
}

module.exports = {
    sendMail
}