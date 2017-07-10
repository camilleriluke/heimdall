import types from './actionTypes';

export function push (route) {
    return { type: types.PUSH, route };
}

export function replace (route) {
    return { type: types.REPLACE, route };
}

export function goBack () {
    return { type: types.GO_BACK };
}