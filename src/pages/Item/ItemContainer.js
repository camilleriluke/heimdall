import React from 'react';
import { connect } from 'react-redux';
import Redirect from '../../components/Redirect';
import { updateItem, deleteItem } from '../../actions';
import Item from './Item';

function ItemContainer ({ item, onUpdate, onDelete }) {
    if (item) {
        return (
            <Item
                item={ item }
                onUpdate={ onUpdate }
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
        onUpdate: item => dispatch(updateItem(item)),
        onDelete: () => dispatch(deleteItem())
    }
}

const ConnectedItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer);

export default ConnectedItemContainer;
