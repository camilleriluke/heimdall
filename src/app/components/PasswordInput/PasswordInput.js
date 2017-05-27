import React from 'react';
import _ from 'lodash';
import generalStyles from '../../styles/general.css';
import styles from './PasswordInput.css';

const DEFAULT_PLACEHOLDER = 'Password...';

export default class PasswordInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            type: 'password',
            showText: 'show',
            hideText: 'hide',
            toggleText: 'show',
            value: ''
        };
        this.focus = this.focus.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    focus () {
        this.input.focus();
    }

    onChange (event) {
        const value = event.target.value;

        this.setState({ value });

        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }

    toggleType () {
        const type = this.getNextType();
        const toggleText = type === 'text' ? this.state.hideText : this.state.showText;

        this.setState({ type, toggleText });
    }

    getNextType () {
        if (this.state.type === 'password') {
            return 'text';
        }

        return 'password';
    }

    render () {
        return (
            <div className={ `${ styles.passwordInputContainer } ${ this.props.className }` }>
                <input
                    ref={ input => { this.input = input; } }
                    className={ `${ generalStyles.input } ${ styles.passwordInput }` }
                    placeholder={ this.props.placeholder || DEFAULT_PLACEHOLDER }
                    onChange={ this.onChange }
                    type={ this.state.type }
                />
                <span
                    className={ styles.passwordInputToggle }
                    onClick={ this.toggleType.bind(this) }
                >
                    { this.state.toggleText }
                </span>
            </div>
        );
    }
}
