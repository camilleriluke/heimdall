import React from 'react';
import ItemsListRow from '../ItemsListRow';
import styles from './ItemsList.scss';

export default function ItemsList ({ items }) {
    return (
        <div className='items-list'>
            { loopItems(items) }
        </div>
    );
}

function loopItems (items) {
    if (_.isEmpty(items)) {
        return <span className='items-empty-message'>No items found.</span>;
    }

    return _.map(items, (item, index) => (<ItemsListRow item={ item } key={ index } />));
}
