import React from 'react';
import styles from './Title.scss';

export default function Title ({ text }) {
    return (
        <div className='title'>{ text }</div>
    );
}