import React from 'react';
import _ from 'lodash';
import Link from '../../components/Link';
import LockButton from '../../components/LockButton';
import Header from '../../components/Header';
import ItemsList from '../../components/ItemsList';
import Search from '../../components/Search';
import './Items.scss';

export default function Items ({ items }) {
    return (
        <div className='page'>
            <Header>
                <LockButton className='header-button float-right' />
                <Search className='float-right' />
                <Link className='create-item-fixed button-green' href='/create-item'>+</Link>
            </Header>
            <ItemsList items={ items } />
        </div>
    );
}
