# Heimdall

A very lightweight, offline password storage.

## Install
`$ npm i -g heimdall`

## Command-line
There is a basic command line API.

| Command                                   | Description                                                                |
| ----------------------------------------- | -------------------------------------------------------------------------- |
| `$ heimdall encrypt <file> <password>`    | Encrypts a file's content with the given password and writes it to stdout. |
| `$ heimdall decrypt <file> <password>`    | Decrypts a file's content with the given password and writes it to stdout. |

## Development

First clone this repo, then use the following commands:

| Command                                   | Description                                                                |
| ----------------------------------------- | -------------------------------------------------------------------------- |
| `$ npm test`                              | Runs all the tests. |
| `$ npm run tdd                            | Runs tests on every file change. |