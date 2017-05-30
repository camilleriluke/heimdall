import persistedStore from '../../lib/store';

export function lockStore () {
    clearStatus();
    return { type: 'LOCK' };
}

export function unlockStore (items, password) {
    persistStatus(items, password);
    return { type: 'UNLOCK', items, password };
}

export function createStore (password) {
    return { type: 'CREATE_STORE', password };
}

function persistStatus (items, password) {
    persistedStore.set('status', { locked: false, password });
    persistedStore.set('items', items);
}

function clearStatus () {
    persistedStore.remove('status')
    persistedStore.remove('items')
}