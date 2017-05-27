const winston = require('winston');
const _ = require('lodash');

module.exports = getLogger;

function getLogger ({ logLevel = 'info', colors = false }) {
    const consoleTransport = new (winston.transports.Console)({
        timestamp: true,
        colorize: colors,
        handleExceptions: true,
        level: logLevel
    });
    const mainLogger = new (winston.Logger)({ transports: [consoleTransport] });

    return {
        log: function log (level) {
            const args = [].slice.call(arguments, 1);
            if (this.enable) {
                mainLogger.log(level, ...args);
            }
            return this;
        },
        debug: function debug () {
            return this.log('debug', ...arguments);
        },
        info: function info () {
            return this.log('info', ...arguments);
        },
        warning: function warning () {
            return this.log('warn', ...arguments);
        },
        error: function error () {
            return this.log('error', ...arguments);
        },
        if: function logIf (expression) {
            expression = Boolean(expression);
            return _.extend({}, this, { enable: expression });
        },
        setLevel: function setLevel (level) {
            mainLogger.transports.console.level = level;
            return this;
        },
        enable: true
    };
}
