import React from 'react';
import _ from 'lodash';

import styles from './Init.css';
import generalStyles from '../../styles/general.css';
import PasswordInput from '../../components/PasswordInput';
import Row from '../../components/Row';
import CenteredPage from '../../components/CenteredPage';
import Title from '../../components/Title';
import FormDescription from '../../components/FormDescription';
import FormError from '../../components/FormError';
import Button from '../../components/Button';

export default class Unlock extends React.Component {
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
            console.log('------------------------------------');
            console.log('YESSS');
            console.log('------------------------------------');
        }
    }

    render () {
        return (
            <CenteredPage>
                <Title text='Setup Storage' />
                <FormError
                    text={ this.state.errorMessage }
                    className={ generalStyles.marginBottom }
                />

                <form onSubmit={ this.onSubmit }>
                    <PasswordInput
                        placeholder='Password'
                        ref={ password => { this.password = password; } }
                    />
                    <PasswordInput
                        className={ generalStyles.marginTop }
                        placeholder='Confirm password...'
                        ref={ confirmPassword => { this.confirmPassword = confirmPassword; } }
                    />

                    <Button text='Next' color='green' className={ generalStyles.marginTop } />
                </form>

            </CenteredPage>
        );
    }
}
