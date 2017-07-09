import React from 'react';
import CopyToClipboard from '../CopyToClipboard';
import './ItemsListRow.scss';
import { formatLink, isValidUrl } from '../../utils';

export default function ItemsListRow ({ onClick, onCopy, item, displayCopyText }) {
    return (
        <div onClick={ onClick } className='item-list-row'>
            <div className='item-list-row-name'>{ item.name }</div>
            { getLink(item.url) }
            { getCopyMessage(displayCopyText) }
            <CopyToClipboard
                className='item-copy-password'
                text={ item.password }
                onClick={ onCopy }
            >
                <span className='ion-ios-copy-outline'></span>
            </CopyToClipboard>
        </div>
    );
}

function getLink (url) {
    if (!isValidUrl(url)) {
        return null;
    }

    url = formatLink(url);
    return (
        <a className='item-list-row-link' href={ url } onClick={ e => e.stopPropagation() }>
            { url }
        </a>
    );
}

function getCopyMessage (display) {
    const className = display ? 'is-visible' : '';

    return (
        <div className={ `item-copied-message ${ className }` }>
            <span className='ion-checkmark'></span> Password copied
        </div>
    );
}
