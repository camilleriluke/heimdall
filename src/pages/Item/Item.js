import React from 'react';
import Header from '../../components/Header';
import ItemForm from '../../components/ItemForm';
import './Item.scss';

export default function Item ({ item, onSubmit, onDelete }) {
    return (
        <div className='page'>
            <Header title={ item.name } displayBackButton />
            <ItemForm
                item={ item }
                onSubmit={ onSubmit }
            />
        </div>
    );
}