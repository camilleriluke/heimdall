import React from 'react';
import _ from 'lodash';
import './FormError.scss';

export default function FormError ({ text, className }) {
    if (_.isEmpty(text)) {
        return (<div></div>);
    }

    return (
        <div className={ `form-error ${ className }` }>{ text }</div>
    );
}