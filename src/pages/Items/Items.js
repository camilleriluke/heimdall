import React from 'react';
import _ from 'lodash';
import Link from '../../components/Link';
import LockButton from '../../components/LockButton';
import Header from '../../components/Header';
import ItemsList from '../../components/ItemsList';
import './Items.scss';

export default function Items ({ items }) {
    return (
        <div className='page'>
            <Header title='Items'>
                <LockButton className='header-button' />
                <Link className='create-item-fixed button-green' href='/create-item'>+</Link>
            </Header>
            <ItemsList items={ items } />
        </div>
    );
}
