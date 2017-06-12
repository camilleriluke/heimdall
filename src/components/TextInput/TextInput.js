import React from 'react';
import _ from 'lodash';
import './TextInput.scss';

export default class TextInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
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

    render () {
        return (
            <input
                ref={ input => { this.input = input; } }
                name={ this.props.name || '' }
                className={ `input ${ this.props.className }` }
                placeholder={ this.props.placeholder }
                onChange={ this.onChange }
                value={ this.state.value }
                type='text'
            />
        );
    }
}
