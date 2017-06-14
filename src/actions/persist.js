import _ from 'lodash';
import persistedStore from '../../lib/store';

export function persistState () {
    return (dispatch, getState) => {
        const state = getState();
        const password = _.get(state, 'status.password', null);
        const items = _.get(state, 'items', []);

        persistedStore.set('status', { locked: false, password });
        persistedStore.set('items', items);
    };
}

export function clearPersistedState () {
    return () => {
        persistedStore.remove('status');
        persistedStore.remove('items');
    };
}
