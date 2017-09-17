import React from 'react';
import { connect } from 'react-redux';
import GoBack from '../GoBack';
import Icon from '../Icon';
import Help from '../Help';
import { dialog } from '../../actions';
import './Header.scss';

export function Header ({ title = 'Heimdall', displayBackButton, openHelp, children }) {
    return (
        <div className='header'>
            <InfoButton isVisible={ !displayBackButton } openHelp={ openHelp } />
            <BackButton isVisible={ displayBackButton } />
            <div className='header-title'>{ title }</div>
            <div className='header-buttons'>{ children }</div>
        </div>
    );
}

function InfoButton ({ isVisible, openHelp }) {
    if (isVisible) {
        return <span className='header-info ion-information-circled' onClick={ openHelp }></span>;
    }

    return null;
}

function BackButton ({ isVisible }) {
    if (isVisible) {
        return (
            <GoBack className='header-go-back'>
                <Icon icon='ion-ios-arrow-back' className='padding-right' />
                Back
            </GoBack>
        );
    }

    return null;
}

const Connected = connect(
    () => ({}),
    dispatch => ({
        openHelp: () => dispatch(dialog(<Help />))
    })
)(Header);

export default Connected;
