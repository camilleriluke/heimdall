#! /usr/bin/env node


const fs = require('fs');
const path = require('path');
const yargs = require('yargs');
const _ = require('lodash');
const config = require('../config.json');
const logger = require('../src/lib/logger');
const utils = require('../src/lib/utils');
const crypto = require('../src/lib/crypto');

const getFileContents = _.partial(utils.getFileContents, fs, path);
const encryptFile = _.partial(utils.encryptFile, logger, crypto.encrypt, getFileContents);
const decryptFile = _.partial(utils.decryptFile, logger, crypto.decrypt, getFileContents);

yargs
    .usage('$0 <cmd> [args]')
    .command('* [file]', 'Open Heimdall', { file: { default: config.defaultStore }}, defaultCommand)
    .command('encrypt <file> <password>', 'Encrypts the content of a text file', {}, encryptCommand)
    .command('decrypt <file> <password>', 'Decrypts the content of an encrypted file', {}, decryptCommand)
    .help()
    .argv;

function defaultCommand (argv) {
    const file = argv.file;

    logger.debug('Running default command', { file });
}

function encryptCommand (argv) {
    const options = {
        fileName: argv.file,
        password: argv.password
    };

    logger.debug('Heimdall:Encrypt', options);

    console.log(encryptFile(options));
}

function decryptCommand (argv) {
    const options = {
        fileName: argv.file,
        password: argv.password
    };

    logger.debug('Heimdall:Encrypt', options);

    console.log(decryptFile(options));
}
