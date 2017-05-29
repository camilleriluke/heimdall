import React from 'react';
import FormError from '../../components/FormError';
import './NewEntry.scss';

export default class NewEntry extends React.Component {
    constructor (props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            errorMessage: null
        };
    }

    onSubmit (e) {
        const name = this.nameInput.value;
        const password = this.passwordInput.value;

        e.preventDefault();

        if (_.isEmpty(name) || _.isEmpty(password)) {
            this.setState({ errorMessage: 'All fields are required.' });
        } else {
            this.props.onSubmit({
                name,
                password
            });
        }
    }

    render () {
        return (
            <div className='new-entry'>
                <h2>New Entry</h2>

                <FormError
                    text={ this.state.errorMessage }
                    className='margin-bottom'
                />

                <form onSubmit={ this.onSubmit }>
                    <div>
                        <input
                            type='text'
                            placeholder='Name...'
                            ref={ input => { this.nameInput = input; } }
                        />
                    </div>

                    <div>
                        <input
                            type='password'
                            placeholder='Password...'
                            ref={ input => { this.passwordInput = input; } }
                        />
                    </div>

                    <div>
                        <button
                            type='submit'
                            value='Submit'
                        />
                    </div>
                </form>
            </div>
        );
    }
}