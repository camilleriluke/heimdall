import React from 'react';
import _ from 'lodash';
import CopyToClipboard from '../CopyToClipboard';
import './PasswordInput.scss';

const DEFAULT_PLACEHOLDER = 'Password...';
const COPY_MESSAGE_TIMEOUT = 1000;

export default class PasswordInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            type: 'password',
            copiedMessageVisible: false,
            value: this.props.value || ''
        };
        this.focus = this.focus.bind(this);
        this.generatePassword = this.generatePassword.bind(this);
        this.toggleType = this.toggleType.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onCopy = this.onCopy.bind(this);
    }

    focus () {
        this.input.focus();
    }

    generatePassword () {
        const { name, onChange } = this.props;
        const type = 'text';
        const value = getRandomPassword();

        this.setState({ value, type });

        if (onChange) {
            onChange({ name, value });
        }
    }

    onChange ({ target: { value, name }}) {
        const { onChange } = this.props;

        this.setState({ value });

        if (onChange) {
            onChange({ name, value });
        }
    }

    onCopy () {
        this.setState({ copiedMessageVisible: true });

        setTimeout(
            () => this.setState({ copiedMessageVisible: false }),
            COPY_MESSAGE_TIMEOUT
        );
    }

    toggleType () {
        const type = this.getNextType();

        this.setState({ type });
    }

    getNextType () {
        return this.state.type === 'password' ? 'text' : 'password';
    }

    render () {
        const { value, type, copiedMessageVisible } = this.state;
        const { name, placeholder, canGenerate, canCopy } = this.props;
        const toggleVisibilityClass = type === 'text' ? 'ion-eye' : 'ion-eye-disabled';
        const messageClass = copiedMessageVisible ? '' : 'password-copy-message-hide';
        const generateClass = canGenerate && !value ? '' : 'password-generate-hide';

        return (
            <div className={ `password-input-container ${ this.props.className }` }>
                <input
                    ref={ input => { this.input = input; } }
                    name={ name || '' }
                    className={ `input password-input` }
                    placeholder={ placeholder || DEFAULT_PLACEHOLDER }
                    value={ value }
                    type={ type }
                    onChange={ this.onChange }
                />
                <span
                    className={ `password-input-toggle input-icon ${ toggleVisibilityClass }` }
                    onClick={ this.toggleType }
                />
                <CopyToClipboard
                    className='password-copy input-icon ion-ios-copy'
                    text={ value }
                    onClick={ this.onCopy }
                />
                <span className={ `password-copy-message ${ messageClass }` }>
                    Copied
                </span>
                <span className={ `password-generate ${ generateClass }` } onClick={ this.generatePassword }>
                    <i className='ion-wand'></i> Generate Password
                </span>
            </div>
        );
    }
}

function getRandomPassword (length = 15) {
    const chars = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890';
    let pass = '';

    for (let x = 0; x < length; x++) {
        const i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }

    return pass;
}
