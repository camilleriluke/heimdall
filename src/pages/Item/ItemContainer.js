import React from 'react';
import { connect } from 'react-redux';
import Redirect from '../../components/Redirect';
import { updateItem, deleteItem } from '../../actions';
import Item from './Item';

function ItemContainer ({ item, onSubmit, deleteItem }) {
    if (item) {
        return (
            <Item
                item={ item }
                onSubmit={ onSubmit }
                deleteItem={ deleteItem }
            />
        );
    }

    return <Redirect path='/items' />;
}

function mapStateToProps (state) {
    return {
        item: state.item
    };
}

function mapDispatchToProps (dispatch) {
    return {
        onSubmit: item => dispatch(updateItem(item)),
        deleteItem: item => dispatch(deleteItem(item))
    }
}

const Connected = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer);

export default Connected;
