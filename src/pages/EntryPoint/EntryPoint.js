import React from 'react';
import { connect } from 'react-redux';
import { push } from '../../actions';
import './EntryPoint.scss';

function EntryPoint ({ doesStoreExist, locked, redirect }) {
    if (!doesStoreExist) {
        redirect('/init');
    } else if (locked) {
        redirect('/unlock');
    } else {
        redirect('/items');
    }

    return null;
}

function mapStateToProps (state) {
    return {
        doesStoreExist: state.status.doesStoreExist,
        locked: state.status.locked
    };
}

function mapDispatchToProps (dispatch) {
    return {
        redirect: url => dispatch(push(url))
    };
}

const ConnectedEntryPoint = connect(
    mapStateToProps,
    mapDispatchToProps
)(EntryPoint);

export default ConnectedEntryPoint;
