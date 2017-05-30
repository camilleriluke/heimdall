import React from 'react';
import { clipboard } from 'electron';
import './Item.scss';

const COPIED_MESSAGE_TIMEOUT = 1500;

export default class Item extends React.Component {
    constructor (props) {
        super(props);

        this.copyToClipBoard = this.copyToClipBoard.bind(this);
        this.state = {
            displayCopyText: false
        };
    }

    copyToClipBoard (text) {
        this.setState({ displayCopyText: true });
        clipboard.writeText(text);
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
            <div className='item'>
                <div className='item-name'>{ item.name }</div>
                { this.getCopiedMessage() }
                <div
                    className='item-copy-password'
                    onClick={ () => this.copyToClipBoard(item.password) }
                >
                    Copy Password
                </div>
            </div>
        );
    }
}