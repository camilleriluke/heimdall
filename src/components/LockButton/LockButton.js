import React from 'react';
import { connect } from 'react-redux';
import { lockStore } from '../../actions'
import './LockButton.scss';

function LockButton ({ lock, text = 'Lock', className }) {
    return (
        <div
            className={ `button lock-button green ${ className }` }
            onClick={ () => lock() }
        >
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

const ConnectedLockButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(LockButton);

export default ConnectedLockButton;