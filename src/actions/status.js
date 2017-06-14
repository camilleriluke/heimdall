import { persistState, clearPersistedState } from './persist';

export const types = {
    LOCK: 'LOCK',
    UNLOCK: 'UNLOCK',
    CREATE_STORE: 'CREATE_STORE'
}

export function lockStore () {
    return (dispatch) => {
        dispatch({ type: types.LOCK });
        dispatch(clearPersistedState());
    };
}

export function unlockStore (items, password) {
    return (dispatch) => {
        dispatch({ type: types.UNLOCK, items, password });
        dispatch(persistState());
    };
}

export function createStore (password) {
    return (dispatch) => {
        dispatch({ type: types.CREATE_STORE, password });
        dispatch(clearPersistedState());
    };
}
