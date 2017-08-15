import React from 'react';
import TextAreaAutosize from 'react-textarea-autosize';
import './TextArea.scss';

const noop = () => {};

export default function TextArea ({ value, onChange = noop, className, placeholder }) {
    return (
        <TextAreaAutosize
            className={ `textarea ${ className }` }
            value={ value }
            placeholder={ placeholder }
            onChange={ ({ target: { value }}) => onChange(value) }
        />
    );
}
