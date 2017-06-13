import React from 'react';
import { connect } from 'react-redux';
import Redirect from '../../components/Redirect';
import { updateItem, deleteItem } from '../../actions';
import Item from './Item';

function ItemContainer ({ item, onSubmit, onDelete }) {
    if (item) {
        return (
            <Item
                item={ item }
                onSubmit={ onSubmit }
                onDelete={ onDelete }
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
        onDelete: () => dispatch(deleteItem())
    }
}

const ConnectedItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer);

export default ConnectedItemContainer;
