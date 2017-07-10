import types from './actionTypes';

export function search (keyword) {
    return { type: types.SEARCH, keyword };
}

export function clearSearch () {
    return { type: types.CLEAR_SEARCH };
}
