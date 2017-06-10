import React from 'react';
import { connect } from 'react-redux';
import { push } from '../../actions';
import _ from 'lodash';

function Link ({ redirect, href, children, ...props }) {
    return (
        <div
            { ...props }
            onClick={ () => redirect(href) }
        >
            { children }
        </div>
    );
}

function mapDispatchToProps (dispatch) {
    return {
        redirect: path => dispatch(push(path))
    };
}

const ConnectedLink = connect(
    () => ({}),
    mapDispatchToProps
)(Link);

export default ConnectedLink;
