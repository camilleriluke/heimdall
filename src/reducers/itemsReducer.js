import _ from 'lodash';
import { uuid } from '../utils';
import { types } from '../actions/items';

export default function statusReducer (state = [], action) {
    switch (action.type) {
        case types.CREATE_ITEM:
        action.item.id = uuid();
        return [ ...state, action.item ];

        case types.UPDATE_ITEM:
        return [ ...state ];

        case types.DELETE_ITEM:
        return [ ...state ];

        case 'UNLOCK':
        return action.items;

        default:
        return state;
    };
}