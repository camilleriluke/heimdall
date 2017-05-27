export function lock () {
    return { type: 'LOCK' };
}

export function unlock (items) {
    return { type: 'UNLOCK', items };
}

export function createStore (password) {
    return { type: 'CREATE_STORE', password };
}