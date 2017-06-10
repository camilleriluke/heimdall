import React from 'react';
import Header from '../../components/Header';
import ItemForm from '../../components/ItemForm';
import './Item.scss';

export default function Item ({ item, onUpdate, onDelete }) {
    return (
        <div className='page'>
            <Header title={ item.name } />
            <ItemForm
                item={ item }
                onUpdate={ onUpdate }
                onDelete={ onDelete }
            />
        </div>
    );
}