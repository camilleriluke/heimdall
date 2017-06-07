import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

function ItemContainer ({ item }) {
    return <Item item={ item } />;
}

const ConnectedItemContainer = connect(
    state => ({
        item: state.item
    })
)(ItemContainer);

export default ConnectedItemContainer;
