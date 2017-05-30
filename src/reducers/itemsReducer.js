import _ from 'lodash';

export default function statusReducer (state = [], action) {
    switch (action.type) {
        case 'CREATE_ITEM':
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