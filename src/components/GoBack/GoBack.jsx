import React from 'react';
import { connect } from 'react-redux';
import { goBack } from '../../actions';

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
        goBack: () => dispatch(goBack())
    };
}

const Connected = connect(
    () => ({}),
    mapDispatchToProps
)(GoBack);

export default Connected;
