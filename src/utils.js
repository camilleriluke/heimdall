const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const Promise = require('bluebird');
const utils = require('../lib/utils');
const crypto = require('../lib/crypto');
const logger = require('../lib/logger')({});
const { version } = require('../package.json');
const config = require('../default.config');

const ENCODING = 'utf8';
const getFileContents = _.partial(utils.getFileContents, fs, path);
const encryptFile = _.partial(utils.encryptFile, logger, crypto.encrypt, getFileContents);
const decryptFile = _.partial(utils.decryptFile, logger, crypto.decrypt, getFileContents);

const DEFAULT_STORE_OBJECT = {
    encryptor: 'Heimdall',
    version,
    items: []
};

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
    return new Promise((resolve, reject) => {
        const rawStore = readRawStore(file);
        const decryptedStore = crypto.decrypt(rawStore, password);
        const storeObject = safeFromJSON(decryptedStore);

        if (_.isNull(storeObject)) {
            reject({
                type: 'DECRYPT_WRONG_PASSWORD',
                file,
                rawStore,
                decryptedStore
            });
        }

        if (storeObject.encryptor !== DEFAULT_STORE_OBJECT.encryptor) {
            reject({
                type: 'DECRYPT_WRONG_FILE_FORMAT',
                file,
                rawStore,
                decryptedStore
            });
        }

        resolve(storeObject);
    });
}

export function encryptStore ({ file = config.defaultStore, items, password }) {
    const outputObject = _.extend({}, DEFAULT_STORE_OBJECT, { items });
    const outputString = safeToJSON(outputObject);
    const ouputEncrypted = crypto.encrypt(outputString, password);

    return fs.writeFileSync(file, ouputEncrypted, 'utf8');
}

export function safeFromJSON (json) {
    try {
        return JSON.parse(json);
    } catch (e) {
        return null;
    }
}

export function safeToJSON (object) {
    return JSON.stringify(object);
}
