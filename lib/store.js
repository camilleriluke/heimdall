const store = require('store');

module.exports = {
    get,
    set,
    remove,
    clearAll
};

function get (...args) {
    return store.get.apply(store, args);
}

function set (...args) {
    return store.set.apply(store, args);
}

function remove (...args) {
    return store.remove.apply(store, args);
}

function clearAll () {
    return store.get.clearAll(store);
}
