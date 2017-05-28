import React from 'react';
import { connect } from 'react-redux';

import Items from './Items';

function ItemsContainer ({ items }) {
    return (
        <Items
            items={ items }
        />
    )
}

const ConnectedItems = connect(
    state => ({
        items: state.items
    })
)(ItemsContainer);

export default ConnectedItems;
