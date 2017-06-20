import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { dialogOk, dialogCancel } from '../../actions';
import ConfirmDialog from './ConfirmDialog';

export function ConfirmDialogContainer ({ dialogs, onCancel, onConfirm }) {
    return (
        <ConfirmDialog
            dialogs={ dialogs }
            onCancel={ onCancel }
            onConfirm={ onConfirm }
        />
    );
}

function mapStateToProps (state) {
    return {
        dialogs: getConfirmDialogs(state.dialogs)
    };
}

function mapDispatchToProps (dispatch) {
    return {
        onCancel: () => dispatch(dialogCancel()),
        onConfirm: postAction => dispatch(dialogOk(postAction))
    };
}

function getConfirmDialogs (dialogs) {
    return _.filter(dialogs, dialog => dialog.type === 'confirm');
}

const Connected = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfirmDialogContainer);

export default Connected;
