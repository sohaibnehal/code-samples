const winston = require('winston');
winston.emitErrs = true;

const logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: true,
            colorize: true,
            timestamp: function() {
                return new Date(Date.now());
            }
        })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};
