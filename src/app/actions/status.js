export function lockStore () {
    return { type: 'LOCK' };
}

export function unlockStore (items, password) {
    console.log('------------------------------------');
    console.log('UNLOCK');
    console.log('------------------------------------');
    return { type: 'UNLOCK', items, password };
}

export function createStore (password) {
    return { type: 'CREATE_STORE', password };
}
