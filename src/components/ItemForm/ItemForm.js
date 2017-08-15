import React from 'react';
import _ from 'lodash';
import PasswordInput from '../PasswordInput';
import TextInput from '../TextInput';
import LinkInput from '../LinkInput';
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
        const { item } = this.state;

        item[name] = value;

        this.setState({ item });
    }

    onSubmit (event) {
        event.preventDefault();

        if (this.props.onSubmit) {
            this.props.onSubmit(this.state.item);
        }
    }

    render () {
        const { item } = this.state;
        const { title, isNew } = this.props;

        return (
            <div className='item-form'>
                <ItemFormTitle title={ title } />
                <form onSubmit={ this.onSubmit }>
                    <TextInput
                        name='name'
                        placeholder='Name...'
                        value={ item.name }
                        onChange={ this.handleChange }
                    />
                    <TextInput
                        name='username'
                        className='margin-top'
                        placeholder='Username...'
                        value={ item.username }
                        onChange={ this.handleChange }
                    />
                    <LinkInput
                        name='url'
                        className='margin-top'
                        placeholder='URL...'
                        value={ item.url }
                        onChange={ this.handleChange }
                    />
                    <PasswordInput
                        name='password'
                        className='margin-top'
                        placeholder='Password'
                        canGenerate={ true }
                        canCopy={ !isNew }
                        value={ item.password }
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

function ItemFormTitle ({ title }) {
    if (title) {
        return <h1 className='item-form-title'>{ title }</h1>;
    }

    return null;
}