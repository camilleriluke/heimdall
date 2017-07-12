import React from 'react';
import _ from 'lodash';
import './PasswordInput.scss';

const DEFAULT_PLACEHOLDER = 'Password...';

export default class PasswordInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            type: 'password',
            showText: 'show',
            hideText: 'hide',
            toggleText: 'show',
            value: this.props.value || ''
        };
        this.focus = this.focus.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    focus () {
        this.input.focus();
    }

    onChange (event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ value });

        if (this.props.onChange) {
            this.props.onChange({ name, value });
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
        const toggleVisibilityClass = this.state.toggleText === 'show' ? 'ion-eye' : 'ion-eye-disabled';

        return (
            <div className={ `password-input-container ${ this.props.className }` }>
                <input
                    ref={ input => { this.input = input; } }
                    name={ this.props.name || '' }
                    className={ `input password-input` }
                    placeholder={ this.props.placeholder || DEFAULT_PLACEHOLDER }
                    onChange={ this.onChange }
                    value={ this.state.value }
                    type={ this.state.type }
                />
                <span
                    className={ `password-input-toggle input-icon ${ toggleVisibilityClass }` }
                    onClick={ this.toggleType.bind(this) }
                />
                <span
                    className='password-copy input-icon ion-ios-copy'
                    onClick={ () => {} }
                />
            </div>
        );
    }
}
