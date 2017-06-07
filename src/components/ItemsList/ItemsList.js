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
        return (<span>No items.</span>);
    }

    return (
        <div>
            { _.map(items, (item, index) => (<ItemsListRow item={ item } key={ index } />)) }
        </div>
    );
}
