import React from 'react';
import './CenteredPage.scss';

export default function CenteredPage ({ children, className }) {
    return (
        <div className={ `page ${ className }` }>
            <div className='container-centered'>
                <div className='item-centered'>
                    { children }
                </div>
            </div>
        </div>
    );
}
