import React from 'react';
import { connect } from 'react-redux';
import Route from '../Route';
import Redirect from '../Redirect';
import _ from 'lodash';

function ProtectedRoute ({ isAuthenticated, children, ...props }) {
    return (
        <Route { ...props }>
            <CheckAuth isAuthenticated={ isAuthenticated }>{ children }</CheckAuth>
        </Route>
    );
}

function CheckAuth ({ isAuthenticated, children }) {
    if (isAuthenticated) {
        return children;
    }

    return <Redirect path="/unlock" />;
}

function mapStateToProps (state) {
    return {
        isAuthenticated: !_.get(state, 'status.locked', false)
    };
}

const Connected = connect(
    mapStateToProps
)(ProtectedRoute);

export default Connected;
