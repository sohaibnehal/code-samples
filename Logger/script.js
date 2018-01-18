/**
 * Created by sohaibnehal on 06/11/2017.
 */
const logger = require('../logger');

//silly, debug, verbose, info, warn, error
const logMe = (level, activityType, funcName, message) => {
    logger.log(level, `Activity: ${funcName}`,`Function: ${funcName}`, message);
};