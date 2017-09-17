import React from 'react';
import ItemForm from '../../components/ItemForm';
import Header from '../../components/Header';
import './NewItem.scss';

export default function NewItem ({ onSubmit }) {
    return (
        <div className='page'>
            <Header displayBackButton />
            <ItemForm
                title='Create New'
                isNew={ true }
                onSubmit={ onSubmit }
            />
        </div>
    );
}
