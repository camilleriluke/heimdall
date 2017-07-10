import _ from 'lodash';
import { push } from './router';
import { persistState, clearPersistedState } from './persist';
import types from './actionTypes';

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
    return dispatch => {
        dispatch({ type: types.UPDATE_ITEM, item });
        dispatch(persistState());
        dispatch(unsetActiveItem());
    };
}

export function deleteItem (item) {
    return dispatch => {
        dispatch({ type: types.DELETE_ITEM, item });
        dispatch(persistState());
        dispatch(unsetActiveItem());
    };
}

export function setActiveItem (item) {
    return { type: types.SET_ACTIVE_ITEM, item };
}

export function unsetActiveItem () {
    return { type: types.UNSET_ACTIVE_ITEM };
}
