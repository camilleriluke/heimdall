import React from 'react';
import _ from 'lodash';
import PasswordInput from '../PasswordInput';
import TextInput from '../TextInput';
import Button from '../Button';
import './ItemForm.scss';

export default class ItemForm extends React.Component {
    constructor (props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name: _.get(this, 'props.item.name', ''),
            username: _.get(this, 'props.item.username', ''),
            password: _.get(this, 'props.item.password', ''),
            url: _.get(this, 'props.item.url', ''),
            description: _.get(this, 'props.item.description', '')
        };
    }

    handleChange ({ name, value }) {
        this.setState({ [name]: value });
    }

    onSubmit (event) {
        event.preventDefault();

        if (this.props.onUpdate) {
            this.props.onUpdate(this.state);
        }
    }

    render () {
        return (
            <div className='item-form'>
                <form onSubmit={ this.onSubmit }>
                    <TextInput
                        name='name'
                        placeholder='Name...'
                        value={ this.state.name }
                        onChange={ this.handleChange }
                    />
                    <TextInput
                        name='username'
                        className='margin-top'
                        placeholder='Username...'
                        value={ this.state.username }
                        onChange={ this.handleChange }
                    />
                    <TextInput
                        name='url'
                        className='margin-top'
                        placeholder='URL...'
                        value={ this.state.url }
                        onChange={ this.handleChange }
                    />
                    <PasswordInput
                        name='password'
                        className='margin-top'
                        placeholder='Password'
                        value={ this.state.password }
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
