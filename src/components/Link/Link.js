import React from 'react';
import { connect } from 'react-redux';
import { push } from '../../actions';
import _ from 'lodash';

function Link ({ navigate, href, children, ...props }) {
    return (
        <a
            { ...props }
            href={ href }
            onClick={ (e) => {
                e.preventDefault();
                navigate(href);
            }}
        >
            { children }
        </a>
    );
}

function mapDispatchToProps (dispatch) {
    return {
        navigate: path => dispatch(push(path))
    };
}

const ConnectedLink = connect(
    () => ({}),
    mapDispatchToProps
)(Link);

export default ConnectedLink;
