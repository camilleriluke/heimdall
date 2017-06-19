import _ from 'lodash';
import { types } from '../actions/items';
import { types as statusTypes } from '../actions/status';
import { uuid } from '../utils';

export default function statusReducer (state = [], action) {
    switch (action.type) {
        case types.CREATE_ITEM:
            action.item.id = uuid();
            return [ ...state, action.item ];

        case types.UPDATE_ITEM:
            return state.map(item => {
                if (item.id === action.item.id) {
                    return _.extend({}, item, action.item);
                }

                return item;
            });

        case types.DELETE_ITEM:
            return state.filter(item => item.id !== action.item.id);

        case statusTypes.UNLOCK:
            return action.items;

        default:
            return state;
    };
}