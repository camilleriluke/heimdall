const crypto = require('crypto');

const ALGORITHM = 'aes-256-ctr';

module.exports = {
    encrypt,
    decrypt
};

function encrypt (text, password) {
    const cipher = crypto.createCipher(ALGORITHM, password);
    let encrypted = cipher.update(text, 'utf8', 'hex');

    encrypted += cipher.final('hex');

    return encrypted;
}

function decrypt (text, password) {
    const decipher = crypto.createDecipher(ALGORITHM, password);
    let decrypted = decipher.update(text, 'hex', 'utf8');

    decrypted += decipher.final('utf8');

    return decrypted;
}
