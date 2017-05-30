import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Item from '../../components/Item';
import LockButton from '../../components/LockButton';
import './Items.scss';

export default function Items ({ items }) {
    return (
        <div>
            <div className='items-header'>
                <Link to='/create-item'>Create Item</Link>
                <LockButton />
            </div>
            <div>
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
