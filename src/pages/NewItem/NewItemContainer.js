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

function mapDispatchToProps (dispatch) {
    return {
        createItem: item => dispatch(createItem(item))
    };
}

const Connected = connect(
    () => ({}),
    mapDispatchToProps
)(NewItemContainer);

export default Connected;
