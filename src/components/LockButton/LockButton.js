import React from 'react';
import { connect } from 'react-redux';
import { lockStore } from '../../actions'
import Icon from '../Icon';
import './LockButton.scss';

function LockButton ({ lock, text = 'Lock', className }) {
    return (
        <div
            className={ `button lock-button green ${ className }` }
            onClick={ () => lock() }
        >
            <Icon icon='ion-locked' className='padding-right' />
            { text }
        </div>
    );
}

function mapStateToProps () {
    return {};
}

function mapDispatchToProps (dispatch) {
    return {
        lock: () => dispatch(lockStore())
    }
}

const Connected = connect(
    mapStateToProps,
    mapDispatchToProps
)(LockButton);

export default Connected;