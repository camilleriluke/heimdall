const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const Promise = require('bluebird');
const crypto = require('../lib/crypto');
const { version } = require('../package.json');
const config = require('../default.config');
const validUrl = require('valid-url');

const ENCODING = 'utf8';

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
            // eslint-disable-next-line
            reject({
                type: 'DECRYPT_WRONG_PASSWORD',
                file,
                rawStore,
                decryptedStore
            });
        }

        if (storeObject.encryptor !== DEFAULT_STORE_OBJECT.encryptor) {
            // eslint-disable-next-line
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

export function uuid () {
    const s4 = () => Math
        .floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);

    return `${ s4() }${ s4() }-${ s4() }-${ s4() }-${ s4() }`;
}

export function formatLink (link) {
    const needsPrefix = !_.startsWith(link, 'http://') && !_.startsWith(link, 'https://');

    if (needsPrefix && link) {
        return `http://${ link }`;
    }

    return link;
}

export function isValidUrl (url) {
    return validUrl.isWebUri(url);
}
