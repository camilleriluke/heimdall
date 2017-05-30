import React from 'react';
import './CenteredPage.scss';

export default function CenteredPage ({ children }) {
    return (
        <div className='page'>
            <div className='container-centered'>
                <div className='item-centered'>
                    { children }
                </div>
            </div>
        </div>
    );
}