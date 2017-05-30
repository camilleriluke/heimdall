import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ locked, component: Component, ...rest }) => (
    <Route {...rest} render={ (props) => render(props, Component, locked) } />
)

function render (props, Component, locked) {
    if (!locked) {
        return (<Component { ...props }/>);
    }

    return (
        <Redirect to={{
            pathname: '/',
            state: { from: props.location }
        }}/>
    );
}

function mapStateToProps (state) {
    return {
        locked: state.status.locked
    }
}

const ConnectedProtectedRoute = connect(
    mapStateToProps,
)(ProtectedRoute);

export default ConnectedProtectedRoute;
