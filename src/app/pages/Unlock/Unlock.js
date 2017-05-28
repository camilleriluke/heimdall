import React from 'react';

import generalStyles from '../../styles/general.css';
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
                className={ generalStyles.marginBottom }
            />

            <form onSubmit={ onSubmit }>
                <PasswordInput
                    placeholder='Password'
                    onChange={ onPasswordChange }
                />

                <Button
                    text='Unlock'
                    color='green'
                    className={ generalStyles.marginTop }
                />
            </form>
        </CenteredPage>
    );
}
