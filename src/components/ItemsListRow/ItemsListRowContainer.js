import React from 'react';
import { connect } from 'react-redux';
import { setActiveItem, push } from '../../actions';
import CopyToClipboard from '../CopyToClipboard';
import ItemsListRow from './ItemsListRow';

const COPIED_MESSAGE_TIMEOUT = 100500;

class ItemsListRowContainer extends React.Component {
    constructor (props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onCopy = this.onCopy.bind(this);
        this.state = {
            displayCopyText: false
        };
    }

    onCopy () {
        this.setState({ displayCopyText: true });
        setTimeout(() => this.setState({ displayCopyText: false }), COPIED_MESSAGE_TIMEOUT);
    }

    onClick () {
        this.props.setActiveItem(this.props.item);
        this.props.redirect('/item');
    }

    render () {
        return (
            <ItemsListRow
                item={ this.props.item }
                onClick={ () => this.onClick() }
                onCopy={ () => this.onCopy() }
                displayCopyText={ this.state.displayCopyText }
            />
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        setActiveItem: item => dispatch(setActiveItem(item)),
        redirect: path => dispatch(push(path))
    };
}

const ConnectedItemsListRowContainer = connect(
    () => ({}),
    mapDispatchToProps
)(ItemsListRowContainer);

export default ConnectedItemsListRowContainer;