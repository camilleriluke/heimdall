import React from 'react';
import _ from 'lodash';
import Header from '../../components/Header';
import ItemsList from '../../components/ItemsList';
import './Items.scss';

export default function Items ({ items }) {
    return (
        <div className='page'>
            <Header />
            <ItemsList items={ items } />
        </div>
    );
}
