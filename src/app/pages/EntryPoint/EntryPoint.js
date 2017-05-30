import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './EntryPoint.scss';

function EntryPoint ({ doesStoreExist, locked }) {
    if (!doesStoreExist) {
        return (<div><Redirect to='/init' /></div>);
    }

    if (locked) {
        return (<div><Redirect to='/unlock' /></div>);
    }

    return (<div><Redirect to='/items' /></div>);
}

function mapStateToProps (state) {
    return {
        doesStoreExist: state.status.doesStoreExist,
        locked: state.status.locked
    }
}

const ConnectedEntryPoint = connect(
    mapStateToProps,
)(EntryPoint);

export default ConnectedEntryPoint;
