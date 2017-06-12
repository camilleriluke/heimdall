import React from 'react';
import { connect } from 'react-redux';
import { createItem } from '../../actions';
import NewItem from './NewItem';

function NewItemContainer ({ createItem }) {
    return (
        <NewItem
            onSubmit={ item => createItem(item) }
        />
    );
}

const Connected = connect(
    () => ({}),
    dispatch => ({
        createItem: item => dispatch(createItem(item))
    })
)(NewItemContainer);

export default Connected;
