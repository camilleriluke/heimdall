const _ = require('lodash');

module.exports = getLogger;

const levels = {
    DEBUG: 'debug',
    INFO: 'info',
    WARNING: 'warn',
    ERROR: 'error'
};

const levelNumbers = {
    DEBUG: 0,
    INFO: 1,
    WARNING: 2,
    ERROR: 3
};

function getLogger ({ minLogLevel = levels.INFO }) {
    return {
        log: function log (logLevel) {
            const args = [].slice.call(arguments, 1);
            const logFn = console[logLevel] || console.log;

            if (
                this.enable &&
                levelNumbers[logLevel] >= levelNumbers[minLogLevel]
            ) {
                logFn(...args);
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
            minLogLevel = level;
            return this;
        },
        enable: true
    };
}
