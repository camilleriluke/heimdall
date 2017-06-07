import React from 'react';
import Header from '../../components/Header';
import './Item.scss';

export default function Item ({ item, onUpdate, onDelete }) {
    return (
        <div className='page'>
            <Header title={ item.name } />
        </div>
    );
}