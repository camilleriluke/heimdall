import _ from 'lodash';
import { types } from '../actions';

const defaultState = [];

export default function dialogsReducer (state = defaultState, action) {
    switch (action.type) {
        case types.DIALOG_OPEN:
        return [ ...state, action.dialog ];

        case types.DIALOG_OK:
        return _.dropRight(state);

        case types.DIALOG_CANCEL:
        return _.dropRight(state);

        case types.DIALOG_CLOSE:
        return _.dropRight(state);

        default:
        return state;
    };
}