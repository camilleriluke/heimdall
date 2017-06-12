import React from 'react';
import FormError from '../../components/FormError';
import ItemForm from '../../components/ItemForm';
import './NewItem.scss';

export default function NewItem ({ onUpdate }) {
    return (
        <div className='page'>
            <ItemForm onUpdate={ onUpdate } />
        </div>
    );
}
