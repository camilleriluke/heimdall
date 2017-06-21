import React from 'react';
import _ from 'lodash';
import Icon from '../Icon';
import './Button.scss';

export default function Button ({
    text,
    color,
    size,
    icon,
    onClick = _.noop,
    className = ''
}) {
    return (
        <button
            className={ getStyle(color, size, className) }
            onClick={ onClick }
        >
            { getIcon(icon) }
            { text }
        </button>
    );
}

function getIcon (icon) {
    if (icon) {
        return <Icon icon={ icon } className='padding-right' />
    }

    return null;
}

function getStyle (color, size, className) {
    color = `button-${ color }`;
    size = `button-${ size }`;

    return `button ${ color } ${ size } ${ className }`;
}