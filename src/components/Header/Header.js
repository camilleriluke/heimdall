import React from 'react';
import GoBack from '../GoBack';
import Icon from '../Icon';
import './Header.scss';

export default function Header ({ title='Heimdall', displayBackButton, children }) {
    return (
        <div className='header'>
            { getBackButton(displayBackButton) }
            <div className='header-title'>{ title }</div>
            <div className='header-buttons'>{ children }</div>
        </div>
    );
}

function getBackButton (displayBackButton) {
    if (displayBackButton) {
        return (
            <GoBack className='header-go-back'>
                <Icon icon='ion-ios-arrow-back' className='padding-right' />
                Back
            </GoBack>
        );
    }

    return null;
}
