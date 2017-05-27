import React from 'react';
import styles from './FormDescription.css';

export default function FormDescription ({ text }) {
    return (
        <div className={ styles.formdescription }>{ text }</div>
    );
}