import React from 'react';
import { connect } from 'react-redux';
import Route from '../Route';
import Redirect from '../Redirect';
import _ from 'lodash';

function ProtectedRoute ({ isAuthenticated, children, ...props }) {
    if (!isAuthenticated) {
        return <Redirect path="/unlock" />;
    }

    return <Route { ...props }>{ children }</Route>;
}

function mapStateToProps (state) {
    return {
        isAuthenticated: !_.get(state, 'status.locked', false)
    }
}

const ConnectedRoute = connect(
    mapStateToProps
)(ProtectedRoute);

export default ConnectedRoute;

function matchRoute (activeRoute, route) {
    return activeRoute === route;
}