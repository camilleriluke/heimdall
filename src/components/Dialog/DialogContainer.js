import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { dialogClose } from '../../actions';
import Dialog from './Dialog';

export function DialogContainer ({ dialogs, onClose }) {
    return (
        <Dialog
            dialogs={ dialogs }
            onClose={ onClose }
        />
    );
}

function getDialogs (dialogs) {
    return _.filter(dialogs, dialog => dialog.type === 'normal');
}

const Connected = connect(
    state => ({
        dialogs: getDialogs(state.dialogs)
    }),
    dispatch => ({
        onClose: () => dispatch(dialogClose())
    })
)(DialogContainer);

export default Connected;
