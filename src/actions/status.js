import { persistState, clearPersistedState } from './persist';

export function lockStore () {
    return (dispatch) => {
        dispatch({ type: 'LOCK' });
        dispatch(clearPersistedState());
    };
}

export function unlockStore (items, password) {
    return (dispatch) => {
        dispatch({ type: 'UNLOCK', items, password });
        dispatch(persistState());
    };
}

export function createStore (password) {
    return (dispatch) => {
        dispatch({ type: 'CREATE_STORE', password });
        dispatch(clearPersistedState());
    };
}
