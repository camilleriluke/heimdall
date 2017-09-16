import React from 'react';
import CopyToClipboard from '../CopyToClipboard';
import './ItemsListRow.scss';
import { formatLink, isValidUrl } from '../../utils';

export default function ItemsListRow ({ onClick, onCopy, item, displayCopyText, keyword }) {
    return (
        <div onClick={ onClick } className='item-list-row'>
            { getItemName(item.name, keyword) }
            { getLink(item.url) }
            { getCopyMessage(displayCopyText) }
            { getCopyButton(item.password, onCopy) }
            <span className='item-next ion-chevron-right'></span>
        </div>
    );
}

function getItemName (name, keyword = '') {
    if (!keyword) {
        return <div className='item-list-row-name'>{ name }</div>;
    }

    const regex = new RegExp(keyword, 'igm');
    const match = name.match(regex);
    const part = match ? match[0] : '';
    const from = part ? name.indexOf(part) : 0;
    const to = part ? part.length : 0;

    if (from > 0) {
        return (
            <div className='item-list-row-name'>
                { name.substr(0, from) }
                <span className='highlighted'>{ name.substr(from, to) }</span>
                { name.substr(from + part.length) }
            </div>
        );
    } else {
        return (
            <div className='item-list-row-name'>
                <span className='highlighted'>{ name.substr(from, to) }</span>
                { name.substr(to) }
            </div>
        );
    }
}

function getCopyButton (password, onCopy) {
    return (
        <CopyToClipboard
            className='item-copy-password'
            text={ password }
            onClick={ onCopy }
        >
            <span className='ion-ios-copy-outline'></span>
        </CopyToClipboard>
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
