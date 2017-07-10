import _ from 'lodash';
import types from './actionTypes';

export function confirm (text, postAction) {
    const dialog = {
        type: 'confirm',
        text,
        postAction,
    };

    return { type: types.DIALOG_OPEN, dialog };
}

export function dialogOk (postAction) {
    return dispatch => {
        dispatch({ type: types.DIALOG_OK });

        if (postAction) {
            dispatch(postAction);
        }
    };
}

export function dialogCancel () {
    return { type: types.DIALOG_CANCEL };
}
