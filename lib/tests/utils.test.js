const sinon = require('sinon');
const utils = require('../utils');
const stubs = require('./stubs');

let options;
let plainText;
let encryptedText;
let logger;
let encrypt;
let decrypt;
let getFileContents;

beforeEach(() => {
    plainText = 'Lorem Ipsum Dolor Sit Amet';
    encryptedText = 'encrypted';
    logger = stubs.logger();
    encrypt = sinon.stub().withArgs(plainText).returns(encryptedText);
    decrypt = sinon.stub().withArgs(encryptedText).returns(plainText);
    getFileContents = sinon.stub().returns(plainText);
    options = {
        fileName: 'foobar.txt',
        password: 'loremipsum'
    };
});

describe('.encryptFile()', () => {
    beforeEach(() => {
        getFileContents = sinon.stub().returns(plainText);
    });

    it('should return with the encrypted content of the file by default', () => {
        const output = utils.encryptFile(logger, encrypt, getFileContents, options);

        expect(output).toEqual(encryptedText);
    });

    it('should log an error on any errors and return with empty string', () => {
        getFileContents.throws(new Error('FooBar'));
        const output = utils.encryptFile(logger, encrypt, getFileContents, options);

        expect(logger.error.calledOnce).toEqual(true);
        expect(output).toEqual('');
    });
});

describe('.decryptFile()', () => {
    beforeEach(() => {
        getFileContents = sinon.stub().returns(encryptedText);
    });

    it('should return with the decrypted content of the file', () => {
        const output = utils.decryptFile(logger, decrypt, getFileContents, options);

        expect(output).toEqual(plainText);
    });

    it('should log an error on any errors and return with empty string', () => {
        getFileContents.throws(new Error('FooBar'));
        const output = utils.decryptFile(logger, decrypt, getFileContents, options);

        expect(logger.error.calledOnce).toEqual(true);
        expect(output).toEqual('');
    });
});

describe('.exportStore()', () => {
    let saveFile;
    let storeFile;

    beforeEach(() => {
        storeFile = '/foo/bar';
        saveFile = sinon.stub();
        getFileContents = sinon.stub().withArgs(storeFile).returns(encryptedText);
    });

    it('should save the encrypted store to a file', () => {
        utils.exportStore(saveFile, getFileContents, storeFile, options);

        expect(saveFile.callCount).toEqual(1);
        expect(saveFile.args[0][0]).toEqual(options.fileName);
        expect(saveFile.args[0][1]).toEqual(encryptedText);
    });
});

describe('.getFileContents()', () => {
    let fileName;
    let fileContent;
    let fs;
    let path;

    beforeEach(() => {
        fileName = '/foo/bar';
        fileContent = 'FooBar';
        path = stubs.path();
        fs = stubs.fs();
        fs.readFileSync = sinon.stub().returns(fileContent);
    });

    it('should return with the contents of a file', () => {
        expect(utils.getFileContents(fs, path, fileName)).toEqual(fileContent);
    });
});

describe('.saveFile()', () => {
    let fileName;
    let fileContent;
    let fs;
    let path;

    beforeEach(() => {
        fileName = '/foo/bar';
        fileContent = 'FooBar';
        path = stubs.path();
        path.resolve.withArgs(fileName).returns(`/var/lib/${ fileName }`);
        fs = stubs.fs();
    });

    it('should save contents to a file', () => {
        utils.saveFile(fs, path, fileName, fileContent);

        expect(fs.writeFileSync.callCount).toEqual(1);
        expect(fs.writeFileSync.args[0][0]).toMatch(fileName);
        expect(fs.writeFileSync.args[0][1]).toEqual(fileContent);
        expect(fs.writeFileSync.args[0][2]).toEqual('utf8');
    });
});
