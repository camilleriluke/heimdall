import React from 'react';
import _ from 'lodash';
import './ConfirmDialog.scss';

export default function ConfirmDialog ({ dialogs, onCancel, onConfirm }) {
    if (_.isEmpty(dialogs)) {
        return null;
    }

    const { text, postAction } = _.last(dialogs);

    return (
        <div className='confirm-dialog'>
            <div className='confirm-dialog-overlay' onClick={ onCancel }></div>
            <div className='confirm-dialog-content'>
                <div className='confirm-dialog-text'>{ text }</div>
                <div className='confirm-dialog-actions'>
                    <div className='confirm-dialog-cancel' onClick={ onCancel }>Cancel</div>
                    <div className='confirm-dialog-confirm' onClick={ () => onConfirm(postAction) }>Confirm</div>
                </div>
            </div>
        </div>
    );
}
