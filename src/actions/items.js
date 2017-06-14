import _ from 'lodash';
import { push } from './router';
import { persistState, clearPersistedState } from './persist';

export const types = {
    CREATE_ITEM: 'CREATE_ITEM',
    UPDATE_ITEM: 'UPDATE_ITEM',
    DELETE_ITEM: 'DELETE_ITEM',
    SET_ACTIVE_ITEM: 'SET_ACTIVE_ITEM',
    UNSET_ACTIVE_ITEM: 'UNSET_ACTIVE_ITEM'
}

const DEFAULT_ITEM = {
    name: 'FooBar',
    password: 'FooBarPassword',
    url: '',
    username: '',
    description: 'some small description'
};

export function createItem (item) {
    return dispatch => {
        dispatch({ type: types.CREATE_ITEM, item });
        dispatch(persistState());
        dispatch(push('/items'));
    };
}

export function updateItem (item) {
    return { type: types.UPDATE_ITEM, item };
}

export function deleteItem (item) {
    return { type: types.DELETE_ITEM, item };
}

export function setActiveItem (item) {
    return { type: types.SET_ACTIVE_ITEM, item };
}

export function unsetActiveItem () {
    return { type: types.UNSET_ACTIVE_ITEM };
}
