import _ from 'lodash';
import persistedStore from '../../lib/store';

export function persistState () {
    return (dispatch, getState) => {
        const state = getState();
        const password = _.get(state, 'status.password', null);
        const storeFile = _.get(state, 'status.storeFile');
        const locked = _.get(state, 'status.locked');
        const items = _.get(state, 'items.raw');

        persistedStore.set('status', { locked, password, storeFile });
        persistedStore.set('items', items);
    };
}

export function clearPersistedState () {
    return () => {
        persistedStore.remove('status');
        persistedStore.remove('items');
    };
}
