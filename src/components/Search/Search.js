import React from 'react';
import './Search.scss';

export default function Search ({ className }) {
    return (
        <div className={ `search ${ className }` }>
            <input
                className='search-input'
                type='text'
                placeholder='Search...'
            />
        </div>
    );
}
