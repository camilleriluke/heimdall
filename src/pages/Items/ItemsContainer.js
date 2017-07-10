import React from 'react';
import { connect } from 'react-redux';
import Items from './Items';

function ItemsContainer ({ items }) {
    return <Items items={ items } />;
}

const Connected = connect(
    state => ({
        items: state.items.filtered
    })
)(ItemsContainer);

export default Connected;
