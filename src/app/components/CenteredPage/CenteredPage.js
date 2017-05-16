import React from 'react';
import styles from './CenteredPage.css';
import generalStyles from '../../styles/general.css';

export default function CenteredPage ({ children }) {
    return (
        <div className={ generalStyles.page }>
            <div className={ styles.centeredContainer }>
                <div className={ styles.centeredItem }>
                    { children }
                </div>
            </div>
        </div>
    );
}