import React from 'react';
import styles from './Unlock.css';
import generalStyles from '../../styles/general.css';
import PasswordInput from '../../components/PasswordInput';
import Row from '../../components/Row';
import CenteredPage from '../../components/CenteredPage';

export default function Unlock () {
    return (
        <CenteredPage>
            Unlooock
            <PasswordInput />
        </CenteredPage>
    );
}