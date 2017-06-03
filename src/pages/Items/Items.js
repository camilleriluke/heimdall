import React from 'react';
import _ from 'lodash';
import { Link } from 'redux-little-router';
import Item from '../../components/Item';
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
            <div className='items'>
                { loopItems(items) }
            </div>
        </div>
    );
}

function loopItems (items) {
    if (_.isEmpty(items)) {
        return (<span>No items.</span>);
    }

    return (
        <div>
            { _.map(items, (item, index) => (<Item item={ item } key={ index } />)) }
        </div>
    );
}
