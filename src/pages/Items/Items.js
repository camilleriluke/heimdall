import React from 'react';
import _ from 'lodash';
import Link from '../../components/Link';
import ItemsList from '../../components/ItemsList';
import LockButton from '../../components/LockButton';
import './Items.scss';

export default function Items ({ items }) {
    return (
        <div className='page'>
            <div className='page-header'>
                <div className='page-header-title'>Heimdall</div>
                <Link href='/create-item' className='create-item-fixed green'>+</Link>
                <LockButton className='lock-button-fixed' />
            </div>
            <ItemsList items={ items } />
        </div>
    );
}
