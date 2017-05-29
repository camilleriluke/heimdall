import React from 'react';
import PasswordInput from '../../components/PasswordInput';
import CenteredPage from '../../components/CenteredPage';
import Title from '../../components/Title';
import FormError from '../../components/FormError';
import Button from '../../components/Button';

export default function Unlock ({
    errorMessage,
    onPasswordChange,
    onSubmit
}) {
    return (
        <CenteredPage>
            <Title text='Unlock' />

            <FormError
                text={ errorMessage }
                className='margin-bottom'
            />

            <form onSubmit={ onSubmit }>
                <PasswordInput
                    placeholder='Password'
                    onChange={ onPasswordChange }
                />

                <Button
                    text='Unlock'
                    color='green'
                    className='margin-top'
                />
            </form>
        </CenteredPage>
    );
}
