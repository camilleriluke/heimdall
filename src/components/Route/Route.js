import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

function Route ({ path = '', activeRoute, children }) {
    if (matchRoute(activeRoute, path)) {
        return <div>{ children }</div>;
    }

    return null;
}

function mapStateToProps (state) {
    return {
        activeRoute: _.get(state, 'router.activeRoute', '/')
    }
}

const ConnectedRoute = connect(
    mapStateToProps
)(Route);

export default ConnectedRoute;

function matchRoute (activeRoute, route) {
    return activeRoute === route;
}