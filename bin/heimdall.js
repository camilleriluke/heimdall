#! /usr/bin/env node

const yargs = require('yargs');
const config = require('../config.json');
const logger = require('../src/logger');

yargs
    .usage('$0 <cmd> [args]')
    .command('* [file]', 'Open Heimdall', { file: { default: config.defaultStore }}, defaultCommand)
    .command('encrypt <file> <password>', 'Encrypts the content of a text file', {}, encryptCommand)
    .command('decrypt <file> <password>', 'Decrypts the content of an encrypted file', {}, decryptCommand)
    .command('export <file>', 'Exports the encrypted password file to the specified file', {}, exportCommand)
    .command('import <file> <password>', 'Imports an encrypted file to the local storage', {}, importCommand)
    .help()
    .argv;

function defaultCommand (argv) {
    const file = argv.file;

    logger.debug('Running default command', { file });
}

function encryptCommand (argv) {
    const file = argv.file;
    const password = argv.password;

    logger.debug('Heimdall:Encrypt', { file, password });
}

function decryptCommand (argv) {
    const file = argv.file;
    const password = argv.password;

    logger.debug('Heimdall:Decrypt', { file, password });
}

function exportCommand (argv) {
    const file = argv.file;

    logger.debug('Heimdall:Export', { file });
}

function importCommand (argv) {
    const file = argv.file;
    const password = argv.password;

    logger.debug('Heimdall:Import', { file, password });
}