import React from 'react';
import CopyToClipboard from '../CopyToClipboard';
import './ItemsListRow.scss';

const COPIED_MESSAGE_TIMEOUT = 1500;

export default class Item extends React.Component {
    constructor (props) {
        super(props);

        this.copyToClipBoard = this.onCopy.bind(this);
        this.state = {
            displayCopyText: false
        };
    }

    onCopy () {
        this.setState({ displayCopyText: true });
        setTimeout(() => this.setState({ displayCopyText: false }), COPIED_MESSAGE_TIMEOUT);
    }

    getCopiedMessage () {
        if (this.state.displayCopyText) {
            return <div className='item-copied-message'>Copied.</div>;
        }

        return null;
    }

    render () {
        const item = this.props.item;

        return (
            <div className='item-list-row'>
                <div className='item-list-row-name'>{ item.name }</div>
                { this.getCopiedMessage() }
                <CopyToClipboard
                    className='item-copy-password'
                    text={ item.password }
                    onClick={ () => this.onCopy() }
                >
                    Copy Password
                </CopyToClipboard>
            </div>
        );
    }
}