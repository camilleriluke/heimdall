import _ from 'lodash';

const defaultState = {
    name: '',
    username: '',
    password: '',
    url: '',
    description: ''
};

export default function statusReducer (state = null, action) {
    switch (action.type) {
        case 'SET_ACTIVE_ITEM':
        return action.item;

        case 'UNSET_ACTIVE_ITEM':
        return null;

        default:
        return state;
    };
}