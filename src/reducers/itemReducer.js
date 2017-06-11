import _ from 'lodash';
import { types } from '../actions/items';

const defaultState = {
    name: '',
    username: '',
    password: '',
    url: '',
    description: ''
};

export default function statusReducer (state = null, action) {
    switch (action.type) {
        case types.SET_ACTIVE_ITEM:
        return action.item;

        case types.UNSET_ACTIVE_ITEM:
        return null;

        default:
        return state;
    };
}