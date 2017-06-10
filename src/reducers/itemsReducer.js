import _ from 'lodash';
import { uuid } from '../utils';

export default function statusReducer (state = [], action) {
    switch (action.type) {
        case 'CREATE_ITEM':
        action.item.id = uuid();
        return [ ...state, action.item ];

        case 'UPDATE_ITEM':
        return [ ...state ];

        case 'DELETE_ITEM':
        return [ ...state ];

        case 'UNLOCK':
        return action.items;

        default:
        return state;
    };
}