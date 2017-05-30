import _ from 'lodash';

const DEFAULT_ITEM = {
    name: 'FooBar',
    password: 'FooBarPassword',
    url: '',
    username: '',
    description: 'some small description'
};

export function createItem (item) {
    item = _.extend({}, DEFAULT_ITEM, item);

    return { type: 'CREATE_ITEM', item };
}

export function updateItem (item) {
    return { type: 'UPDATE_ITEM', item };
}

export function deleteItem (item) {
    return { type: 'DELETE_ITEM', item };
}
