import React from 'react';
import { clipboard } from 'electron';
import _ from 'lodash';

export default function CopyToClipboard ({ text = '', onClick = _.noop, children, ...props }) {
    const copy = _.partial(copyTextToClipboard, text, onClick);

    return (
        <div
            { ...props }
            onClick={ copy }
        >
            { children }
        </div>
    );
}

function copyTextToClipboard (text, callback, event) {
    event.preventDefault();
    event.stopPropagation();
    clipboard.writeText(text);
    callback();
}