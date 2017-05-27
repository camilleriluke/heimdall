import React from 'react';
import _ from 'lodash';
import styles from './FormError.css';

export default function FormError ({ text, className }) {
    if (_.isEmpty(text)) {
        return (<div></div>);
    }

    return (
        <div className={ `${ styles.formError } ${ className }` }>{ text }</div>
    );
}