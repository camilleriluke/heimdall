import React from 'react';
import _ from 'lodash';
import './Button.scss';

export default function Button ({
    text,
    color,
    size,
    onClick = _.noop,
    className = ''
}) {
    return (
        <button
            className={ getStyle(color, size, className) }
            onClick={ onClick }
        >
            { text }
        </button>
    );
}

function getStyle (color, size, className) {
    color = `button-${ color }`;
    size = `button-${ size }`;

    return `button ${ color } ${ size } ${ className }`;
}