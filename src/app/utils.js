const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const utils = require('../lib/utils');
const crypto = require('../lib/crypto');
const logger = require('../lib/logger')({});

const ENCODING = 'utf8';
const config = require('../../default.config');
const getFileContents = _.partial(utils.getFileContents, fs, path);
const encryptFile = _.partial(utils.encryptFile, logger, crypto.encrypt, getFileContents);
const decryptFile = _.partial(utils.decryptFile, logger, crypto.decrypt, getFileContents);

export function doesStoreExist (file = config.defaultStore) {
    file = path.resolve(file);

    if (!fs.existsSync(file)) {
        return false;
    }

    if (_.isEmpty(readRawStore(file))) {
        return false;
    }

    return true;
}

export function readRawStore (file = config.defaultStore) {
    file = path.resolve(file);

    try {
        return fs.readFileSync(file, ENCODING);
    } catch (e) {
        return '';
    }
}

export function decryptStore ({ file = config.defaultStore, password }) {
    const rawStore = readRawStore(file);

    if (!rawStore) {
        logger.error('Could not decrypt file.');
        return null;
    }
}

export function encryptStore ({ file = config.defaultStore, entries, password }) {

}

export function isStoreValid ({ store }) {

}
