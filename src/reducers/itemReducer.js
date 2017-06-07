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
        case 'UPDATE_ITEM':
        return { ...defaultState, ...action.item };

        case 'DELETE_ITEM':
        return null;

        default:
        return null;
    };
}