import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { createStore, push } from '../../actions';
import PasswordInput from '../../components/PasswordInput';
import CenteredPage from '../../components/CenteredPage';
import Title from '../../components/Title';
import FormError from '../../components/FormError';
import Button from '../../components/Button';
import './Init.scss';

class Init extends React.Component {
    constructor (props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            errorMessage: ''
        };
    }

    onSubmit (e) {
        const password = this.password.state.value;
        const confirmPassword = this.confirmPassword.state.value;

        e.preventDefault();

        if (_.isEmpty(password)) {
            this.setState({ errorMessage: 'Password cannot be empty.' });
        } else if (password !== confirmPassword) {
            this.setState({ errorMessage: 'The two passwords do not match.' });
        } else {
            this.setState({ errorMessage: null });
            this.props.createStore(password);
            this.props.redirect('/items');
        }
    }

    render () {
        return (
            <CenteredPage className='page-dark'>
                <Title text='Setup Storage' />
                <div className='init-description'>
                    This will create an encrypted file called
                    <pre>.heimdall.store</pre> in your home directory.
                </div>
                <FormError
                    text={ this.state.errorMessage }
                    className='margin-bottom'
                />

                <form onSubmit={ this.onSubmit }>
                    <PasswordInput
                        placeholder='Password'
                        ref={ password => {
                            this.password = password;
                        } }
                    />
                    <PasswordInput
                        className='margin-top'
                        placeholder='Confirm password...'
                        ref={ confirmPassword => {
                            this.confirmPassword = confirmPassword;
                        } }
                    />

                    <Button text='Next' color='green' className='margin-top' />
                </form>

            </CenteredPage>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        createStore: password => dispatch(createStore(password)),
        redirect: path => dispatch(push(path))
    };
}

const Connected = connect(
    () => ({}),
    mapDispatchToProps
)(Init);

export default Connected;
