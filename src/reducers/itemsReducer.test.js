const _ = require('lodash');
const sinon = require('sinon');
const itemsReducer = require('./itemsReducer');
const actions = require('../actions/items');

describe('Items Reducer', () => {
    it('should be able to create an item', () => {
        const state = [];
        const item = { name: 'foo', username: 'username' };
        const action = { type: 'CREATE_ITEM', item };
        const output = itemsReducer(state, action);

        expect(output).toEqual([ item ]);
    });
});