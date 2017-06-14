import _ from 'lodash';
import { types } from '../actions/items';
import { types as statusTypes } from '../actions/status';
import { uuid } from '../utils';
import { types } from '../actions/items';

export default function statusReducer (state = [], action) {
    switch (action.type) {
        case types.CREATE_ITEM:
            action.item.id = uuid();
            return [ ...state, action.item ];

        case types.UPDATE_ITEM:
            const newItem = action.item;
            const newState = state.map(item => {
                if (item.id === newItem.id) {
                    return _.extend({}, item, newItem);
                }

                return item;
            });


            return [ ...newState ];

        case types.DELETE_ITEM:
            return [ ...state ];

        case statusTypes.UNLOCK:
            return action.items;

        default:
            return state;
    };
}