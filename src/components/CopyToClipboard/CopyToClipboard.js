import React from 'react';
import { clipboard } from 'electron';
import _ from 'lodash';

export default function CopyToClipboard ({ text = '', onClick = _.noop, children, ...props }) {
    return (
        <div
            { ...props }
            onClick={ () => copy(text, onClick) }
        >
            { children }
        </div>
    );
}

function copy (text, callback) {
    clipboard.writeText(text);
    callback();
}