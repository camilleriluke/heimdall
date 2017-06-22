export const types = {
    PUSH: 'PUSH',
    REPLACE: 'REPLACE',
    GO_BACK: 'GO_BACK'
}

export function push (route) {
    console.log('------------------------------------');
    console.log(route);
    console.log('------------------------------------');
    return { type: types.PUSH, route };
}

export function replace (route) {
    return { type: types.REPLACE, route };
}

export function goBack () {
    return { type: types.GO_BACK };
}