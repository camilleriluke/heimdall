import React from 'react';
import Link from '../Link';
import GoBack from '../GoBack';
import LockButton from '../LockButton';
import './Header.scss';

export default function Header ({ title, displayBackButton }) {
    return (
        <div className='header'>
            { getBackButton(displayBackButton) }
            <div className='header-title'>{ title }</div>
            <Link href='/create-item' className='create-item-fixed green'>+</Link>
            <LockButton className='lock-button-fixed' />
        </div>
    );
}

function getBackButton (displayBackButton) {
    if (displayBackButton) {
        return <GoBack className='header-go-back'>Back</GoBack>
    }

    return null;
}
