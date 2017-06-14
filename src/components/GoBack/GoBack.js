import React from 'react';
import { connect } from 'react-redux';
import { goBack } from '../../actions';
import _ from 'lodash';

function GoBack ({ goBack, children, ...props }) {
    return (
        <div
            { ...props }
            onClick={ () => goBack() }
        >
            { children }
        </div>
    );
}

function mapDispatchToProps (dispatch) {
    return {
        goBack: path => dispatch(goBack())
    };
}

const Connected = connect(
    () => ({}),
    mapDispatchToProps
)(GoBack);

export default Connected;
