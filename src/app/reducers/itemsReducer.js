const defaultState = {
    items: []
};

export default function statusReducer (state = defaultState, action) {
    switch (action.type) {
        case 'UNLOCK':
        return { ...state, items: action.items };

        case 'LOCK':
        return { ...state, items: [] };

        case 'CREATE_STORE':
        return { ...state, items: [] };

        default:
        return state;
    };
}