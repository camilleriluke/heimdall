export function lockStore () {
    return { type: 'LOCK' };
}

export function unlockStore (items, password) {
    return { type: 'UNLOCK', items, password };
}

export function createStore (password) {
    return { type: 'CREATE_STORE', password };
}
