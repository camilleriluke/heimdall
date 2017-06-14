import { types } from '../actions/status';

const defaultState = {
    locked: true,
    doesStoreExist: false,
    password: null
};

export default function statusReducer (state = defaultState, action) {
    switch (action.type) {
        case types.UNLOCK:
        return {
            ...state,
            locked: false,
            password: action.password
        };

        case types.LOCK:
        return {
            ...state,
            locked: true,
            password: null
        };

        case types.CREATE_STORE:
        return {
            ...state,
            locked: false,
            doesStoreExist: true,
            password: action.password
        };

        default:
        return state;
    };
}