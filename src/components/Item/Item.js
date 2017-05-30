import React from 'react';
import './Item.scss';

export default function Item ({ item }) {
    return (
        <div className='item'>
            <div className='item-name'>{ item.name }</div>
            <div className='item-detailed'>
            </div>
        </div>
    );
}