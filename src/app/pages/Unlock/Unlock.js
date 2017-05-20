import React from 'react';
import styles from './Unlock.css';
import generalStyles from '../../styles/general.css';
import PasswordInput from '../../components/PasswordInput';
import Row from '../../components/Row';
import CenteredPage from '../../components/CenteredPage';
import Title from '../../components/Title';
import Button from '../../components/Button';

export default function Unlock () {
    return (
        <CenteredPage>
            <Title text='Unlock' />
            <PasswordInput />
            <Button text='Next' color='green' className={ generalStyles.marginTop } />
        </CenteredPage>
    );
}