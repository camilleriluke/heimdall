import React from 'react';
import CopyToClipboard from '../CopyToClipboard';
import './ItemsListRow.scss';

export default function ItemsListRow ({ onClick, onCopy, item, displayCopyText }) {
    return (
        <div onClick={ onClick } className='item-list-row'>
            <div className='item-list-row-name'>{ item.name }</div>
            { getCopyMessage(displayCopyText) }
            <CopyToClipboard
                className='item-copy-password'
                text={ item.password }
                onClick={ onCopy }
            >
                Copy Password
            </CopyToClipboard>
        </div>
    );
}

function getCopyMessage (display) {
    if (display) {
        return <div className='item-copied-message'>Copied.</div>;
    }

    return null;
}
