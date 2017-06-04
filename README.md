# Heimdall

A very lightweight, offline password manager.

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
| `$ npm test`                              | Runs all the tests.                                                        |
| `$ npm run tdd`                           | Runs tests on every file change.                                           |
| `$ npm run electron`                      | Runs the Electron app for development                                      |
| `$ npm run dev`                           | Runs Webpack in watch mode                                                 |

## File format

The file format Heimdall is saving encrypted files in:
```javascript
{
    "encryptor": "Heimdall",
    "version": "0.1",
    "entries": [
        {
            "name": "Github", // Required
            "password": "FooBar123", // Required
            "url": "https://github.com/login", // Optional
            "username": "foobar", // Optional
            "description": "Lorem ipsum dolor sit amet..." // Optional
        }
    ]
}
```

The `"encryptor": "Heimdall"` part is important, if it's not found in the decrypted part, Heimdall won't recognize
it as a valid decryption.
