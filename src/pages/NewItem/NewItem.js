import React from 'react';
import FormError from '../../components/FormError';
import ItemForm from '../../components/ItemForm';
import Header from '../../components/Header';
import './NewItem.scss';

export default function NewItem ({ onUpdate }) {
    return (
        <div className='page'>
            <Header title='New Item' displayBackButton />
            <ItemForm onUpdate={ onUpdate } />
        </div>
    );
}
