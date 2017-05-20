import React from 'react';
import styles from './Title.css';

export default function Title ({ text }) {
    return (
        <div className={styles.title}>{ text }</div>
    );
}