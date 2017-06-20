import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ItemForm from '../../components/ItemForm';
import './Item.scss';

export default function Item ({ item, onSubmit, deleteItem }) {
    return (
        <div className='page'>
            <Header title={ item.name } displayBackButton>
                <Button
                    text='Delete'
                    className='header-button'
                    color='red'
                    onClick={ () => deleteItem(item) }
                />
            </Header>
            <ItemForm
                item={ item }
                onSubmit={ onSubmit }
            />
        </div>
    );
}
