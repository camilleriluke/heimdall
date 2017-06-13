import React from 'react';
import _ from 'lodash';
import PasswordInput from '../PasswordInput';
import TextInput from '../TextInput';
import Button from '../Button';
import './ItemForm.scss';

export default class ItemForm extends React.Component {
    constructor (props) {
        super(props);

        const item = this.props.item || {};

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { item };
    }

    handleChange ({ name, value }) {
        const item = this.state.item;

        item[name] = value;
        this.setState({ item });
    }

    onSubmit (event) {
        event.preventDefault();

        if (this.props.onUpdate) {
            this.props.onUpdate(this.state.item);
        }
    }

    render () {
        return (
            <div className='item-form'>
                <form onSubmit={ this.onSubmit }>
                    <TextInput
                        name='name'
                        placeholder='Name...'
                        value={ this.state.item.name }
                        onChange={ this.handleChange }
                    />
                    <TextInput
                        name='username'
                        className='margin-top'
                        placeholder='Username...'
                        value={ this.state.item.username }
                        onChange={ this.handleChange }
                    />
                    <TextInput
                        name='url'
                        className='margin-top'
                        placeholder='URL...'
                        value={ this.state.item.url }
                        onChange={ this.handleChange }
                    />
                    <PasswordInput
                        name='password'
                        className='margin-top'
                        placeholder='Password'
                        value={ this.state.item.password }
                        onChange={ this.handleChange }
                    />
                    <Button
                        text='Save'
                        color='green'
                        className='margin-top'
                    />
                </form>
            </div>
        );
    }
}
