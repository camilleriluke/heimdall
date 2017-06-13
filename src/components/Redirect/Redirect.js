import React from 'react';
import { connect } from 'react-redux';
import { push } from '../../actions';

class Redirect extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        if (this.props.path) {
            this.props.redirect(this.props.path);
        }
    }

    render () {
        return null;
    }
}

function mapDispatchToProps (dispatch) {
    return {
        redirect: path => dispatch(push(path))
    };
}

const Connected = connect(
    () => ({}),
    mapDispatchToProps
)(Redirect);

export default Connected;