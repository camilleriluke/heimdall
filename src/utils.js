const _ = require('lodash');

module.exports = {
    encryptFile,
    decryptFile,
    exportStore,
    getFileContents,
    saveFile
};

function encryptFile (logger, encrypt, getFileContents, { fileName, password }) {
    try {
        const plainText = getFileContents(fileName);

        return encrypt(plainText, password);
    } catch (e) {
        logger.error('encryptFile() - error while encrypting file', e, { fileName });
        return '';
    }
}

function decryptFile (logger, decrypt, getFileContents, { fileName, password }) {
    try {
        const encrypted = _.trim(getFileContents(fileName));

        return decrypt(encrypted, password);
    } catch (e) {
        logger.error('decryptFile() - error while decrypting file', e, { fileName });
        return '';
    }
}

function exportStore (saveFile, getFileContents, storeFile, { fileName }) {
    const encrypted = getFileContents(storeFile);

    return saveFile(fileName, encrypted);
}

function getFileContents (fs, path, fileName) {
    const filePath = path.resolve(fileName);

    return fs.readFileSync(filePath, 'utf8');
}

function saveFile (fs, path, fileName, fileContent) {
    const filePath = path.resolve(fileName);

    return fs.writeFileSync(filePath, fileContent, 'utf8');
}