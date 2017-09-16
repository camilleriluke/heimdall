const store = require('store');

module.exports = {
    get,
    set,
    remove,
    clearAll
};

function get (...args) {
    return store.get(...args);
}

function set (...args) {
    return store.set(...args);
}

function remove (...args) {
    return store.remove(...args);
}

function clearAll () {
    return store.get.clearAll(store);
}
