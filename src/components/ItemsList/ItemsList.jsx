import React from 'react';
import ItemsListRow from '../ItemsListRow';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import './ItemsList.scss';

export default function ItemsList ({ items }) {
    return (
        <div className='items-list'>
            { loopItems(items) }
        </div>
    );
}

function loopItems (items) {
    if (isEmpty(items)) {
        return <span className='items-empty-message'>No items found.</span>;
    }

    return map(items, (item, index) => (<ItemsListRow item={ item } key={ index } />));
}
