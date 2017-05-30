import React from 'react';
import _ from 'lodash';
import './Button.scss';

export default function Button ({
    text,
    color,
    onClick = _.noop,
    className = ''
}) {
    return (
        <button
            className={ getStyle(color, className) }
            onClick={ onClick }
        >
            { text }
        </button>
    );
}

function getStyle (color, className) {
    return `button ${ color } ${ className }`;
}