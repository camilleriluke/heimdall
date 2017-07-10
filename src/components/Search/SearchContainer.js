import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';

export function SearchContainer ({ className }) {
    return (
        <Search
            className={ className }
        />
    );
}

const Connected = connect(
    () => ({}),
    () => ({})
)(SearchContainer);

export default Connected;
