import { types } from '../actions';

const defaultState = {
    activeRoute: '/',
    history: []
};

export default function routerReducer (state = defaultState, action) {
    switch (action.type) {
        case types.PUSH:
            return {
                ...state,
                activeRoute: action.route,
                history: [...state.history, action.route]
            };

        case types.REPLACE:
            return {
                ...state,
                activeRoute: action.route
            };

        case types.GO_BACK:
            state.history.pop();
            return {
                ...state,
                activeRoute: state.history[state.history.length - 1],
                history: state.history
            };

        default:
            return state;
    }
}
