import React from 'react';
import _ from 'lodash';
import './Dialog.scss';

export default class Dialog extends React.Component {
    constructor (props) {
        super(props);

        this.closeAnimationTimeout = 300;
        this.onClose = this.onClose.bind(this);
        this.state = {
            animationClass: ''
        };
    }

    onClose () {
        this.setState({ animationClass: 'dialog-animation-close' })

        setTimeout(
            () => {
                this.setState({ animationClass: '' });
                this.props.onClose();
            },
            this.closeAnimationTimeout
        );
    }

    render () {
        const dialogs = this.props.dialogs || [];
        const dialog = _.last(dialogs) || {};
        const { content } = dialog;
        const { animationClass } = this.state;

        if (_.isEmpty(dialogs)) {
            return null;
        }

        return (
            <div className={ `dialog ${ animationClass }` }>
                <div className='dialog-overlay' onClick={ this.onClose }></div>
                <div className='dialog-content'>
                    <div className='dialog-close' onClick={ this.onClose }>&times;</div>
                    { content }
                </div>
            </div>
        );
    }
}
