import React from 'react';
import _ from 'lodash';
import CopyToClipboard from '../CopyToClipboard';
import './PasswordInput.scss';

const DEFAULT_PLACEHOLDER = 'Password...';
const COPY_MESSAGE_TIMEOUT = 1000;

export default class PasswordInput extends React.Component {
    constructor (props) {
        super(props);

        this.generatePassword = this.generatePassword.bind(this);
        this.toggleType = this.toggleType.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onCopy = this.onCopy.bind(this);
        this.state = {
            type: 'password',
            isCopyMessageVisible: false,
            value: this.props.value || ''
        };
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
        this.setState({ isCopyMessageVisible: true });

        setTimeout(
            () => this.setState({ isCopyMessageVisible: false }),
            COPY_MESSAGE_TIMEOUT
        );
    }

    toggleType () {
        const { type } = this.state;
        const newType = type === 'password' ? 'text' : 'password';

        this.setState({ type: newType });
    }

    render () {
        const { value, type, isCopyMessageVisible } = this.state;
        const {
            name,
            placeholder,
            className = '',
            canGenerate = false,
            canCopy = false
        } = this.props;
        const isGenerateVisible = canGenerate && _.isEmpty(value);
        const extraClassName = getClassName(className, isGenerateVisible, canCopy);

        return (
            <div className={ `password-input-container ${ extraClassName }` }>
                <input
                    ref={ input => {
                        this.input = input;
                    } }
                    name={ name || '' }
                    className={ 'input password-input' }
                    placeholder={ placeholder || DEFAULT_PLACEHOLDER }
                    value={ value }
                    type={ type }
                    onChange={ this.onChange }
                />
                <PasswordToggleButton
                    inputType={ type }
                    onClick={ this.toggleType }
                />
                <PasswordCopyButton
                    isVisible={ canCopy }
                    value={ value }
                    onCopy={ this.onCopy }
                />
                <PasswordCopyMessage
                    isVisible={ isCopyMessageVisible }
                />
                <PasswordGenerateButton
                    isVisible={ isGenerateVisible }
                    onClick={ this.generatePassword }
                />
            </div>
        );
    }
}

function PasswordCopyMessage ({ isVisible }) {
    const className = isVisible ? '' : 'password-copy-message-hide';

    return (
        <span className={ `password-copy-message ${ className }` }>
            Copied
        </span>
    );
}

function PasswordCopyButton ({ isVisible, value, onCopy }) {
    if (isVisible) {
        return (
            <CopyToClipboard
                className='input-icon password-copy ion-ios-copy'
                text={ value }
                onClick={ onCopy }
            />
        );
    }

    return null;
}

function PasswordToggleButton ({ inputType, onClick }) {
    const className = inputType === 'text' ? 'ion-eye' : 'ion-eye-disabled';

    return (
        <span
            className={ `input-icon password-input-toggle ${ className }` }
            onClick={ onClick }
        />
    );
}

function PasswordGenerateButton ({ isVisible, onClick }) {
    const className = isVisible ? '' : 'password-generate-hide';

    return (
        <span className={ `password-generate ${ className }` } onClick={ onClick }>
            <i className='ion-wand'></i> Generate Password
        </span>
    );
}

function getClassName (className, isGenerateVisble, canCopy) {
    if (isGenerateVisble) {
        className = `${ className } can-generate`;
    }

    if (canCopy) {
        className = `${ className } can-copy`;
    }

    return className;
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
