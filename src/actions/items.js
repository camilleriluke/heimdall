import _ from 'lodash';

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
    item = _.extend({}, DEFAULT_ITEM, item);

    return { type: types.CREATE_ITEM, item };
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

export function unsetActiveItem (item) {
    return { type: types.UNSET_ACTIVE_ITEM, item };
}
