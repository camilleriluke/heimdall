import { types } from '../actions';

const defaultState = {
    keyword: null
};

export default function searchReducer (state = defaultState, action) {
    switch (action.type) {
        case types.SEARCH:
            return { keyword: action.keyword };

        case types.CLEAR_SEARCH:
            return defaultState;

        default:
            return state;
    };
}