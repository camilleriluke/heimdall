import _ from 'lodash';

export const types = {
    DIALOG_OPEN: 'DIALOG_OPEN',
    DIALOG_OK: 'DIALOG_CONFIRM',
    DIALOG_CANCEL: 'DIALOG_CANCEL'
};

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
