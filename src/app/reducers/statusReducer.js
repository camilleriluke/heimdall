const defaultState = {
    locked: false
};

export default function statusReducer (state = defaultState, action) {
    switch (action.type) {
        case 'UNLOCK':
        return { ...state, locked: false };

        case 'LOCK':
        return { ...state, locked: true };

        default:
        return state;
    };
}