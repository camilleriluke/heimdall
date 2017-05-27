const defaultState = {
    locked: true,
    doesStoreExist: false,
    password: null
};

export default function statusReducer (state = defaultState, action) {
    switch (action.type) {
        case 'UNLOCK':
        return { ...state, locked: false, password: action.password };

        case 'LOCK':
        return { ...state, locked: true, password: null };

        case 'CREATE_STORE':
        return { ...state, doesStoreExist: true, password: action.password };

        default:
        return state;
    };
}