import React from 'react';
import Link from '../Link';
import LockButton from '../LockButton';
import './Header.scss';

export default function Header ({ title }) {
    return (
        <div className='header'>
            <div className='header-title'>{ title }</div>
            <Link href='/create-item' className='create-item-fixed green'>+</Link>
            <LockButton className='lock-button-fixed' />
        </div>
    );
}
