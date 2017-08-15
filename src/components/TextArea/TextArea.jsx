import React from 'react';
import TextAreaAutosize from 'react-textarea-autosize';
import './TextArea.scss';

const noop = () => {};

export default function TextArea ({
    name,
    value,
    onChange = noop,
    className,
    placeholder
}) {
    return (
        <TextAreaAutosize
            name={ name }
            value={ value }
            placeholder={ placeholder }
            className={ `textarea ${ className }` }
            onChange={ ({ target: { value }}) => onChange({ name, value }) }
        />
    );
}
