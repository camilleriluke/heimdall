import React from 'react';
import { connect } from 'react-redux';
import { search, clearSearch } from '../../actions';
import Search from './Search';

export function SearchContainer ({ className, search, clearSearch }) {
    return (
        <Search
            className={ className }
            search={ search }
            clearSearch={ clearSearch }
        />
    );
}

function mapDispatchToProps (dispatch) {
    return {
        search: keyword => dispatch(search(keyword)),
        clearSearch: () => dispatch(clearSearch())
    };
}

const Connected = connect(
    () => ({}),
    mapDispatchToProps
)(SearchContainer);

export default Connected;
