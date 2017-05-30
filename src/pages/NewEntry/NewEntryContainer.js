import React from 'react';
import { connect } from 'react-redux';
import { createItem } from '../../actions';
import NewEntry from './NewEntry';

function NewEntryContainer ({ createItem }) {
    return (
        <NewEntry
            onSubmit={ item => createItem(item) }
        />
    );
}

const Connected = connect(
    () => ({}),
    dispatch => ({
        createItem: item => dispatch(createItem(item))
    })
)(NewEntryContainer);

export default Connected;
