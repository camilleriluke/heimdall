const defaultState = {
    activeRoute: '/'
};

export default function routerReducer (state = defaultState, action) {
    switch (action.type) {
        case 'PUSH':
        return {
            ...state,
            activeRoute: action.route
        };

        default:
        return state;
    };
}