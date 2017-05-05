const crypto = require('../crypto');

let PASSWORD,
    TEXT;

beforeEach(() => {
    PASSWORD = '1234';
    TEXT = 'foobar';
});


describe('.encrypt()', () => {
    test('should encrypt plain text', () => {
        expect(crypto.encrypt(TEXT, PASSWORD)).not.toEqual(TEXT);
    });
});

describe('.decrypt()', () => {
    test('should be able to decrypt an encrypted text', () => {
        const encrypted = crypto.encrypt(TEXT, PASSWORD);
        const decrypted = crypto.decrypt(encrypted, PASSWORD);

        expect(decrypted).toEqual(TEXT);
    });
});
