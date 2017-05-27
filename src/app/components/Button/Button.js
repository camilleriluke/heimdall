import React from 'react';
import styles from './Button.css';
import _ from 'lodash';

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
    const colorClass = styles[color] ? styles[color] : {};

    return `${ styles.button } ${ colorClass } ${ className }`;
}