const sinon = require('sinon');
const _ = require('lodash');

module.exports = {
    logger,
    fs,
    path
};

function logger () {
    return sinon.stub({
        error: _.noop,
        warning: _.noop,
        info: _.noop,
        debug: _.noop,
        log: _.noop
    });
}

function fs () {
    return sinon.stub({
        readFileSync: _.noop,
        readFile: _.noop,
        writeFileSync: _.noop,
        writeFile: _.noop
    });
}

function path () {
    return sinon.stub({
        resolve: _.noop,
        normalize: _.noop
    });
}
