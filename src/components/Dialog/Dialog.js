import React from 'react';
import _ from 'lodash';
import './Dialog.scss';

export default function Dialog ({ dialogs, onClose }) {
    if (_.isEmpty(dialogs)) {
        return null;
    }

    const { content } = _.last(dialogs);
    console.log('------------------------------------');
    console.log(content);
    console.log('------------------------------------');
    return (
        <div className='dialog'>
            <div className='dialog-overlay' onClick={ onClose }></div>
            <div className='dialog-close' onClick={ onClose }>&times;</div>
            <div className='dialog-content'>{ content }</div>
        </div>
    );
}
