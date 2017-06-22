import React from 'react';
import { connect } from 'react-redux';
import { updateStoreFile, useDefaultStoreFile } from '../../actions';
import StoreFileSelector from './StoreFileSelector';
import './StoreFileSelector.scss';

export function StoreFileSelectorContainer ({ storeFile, className, updateStoreFile, useDefaultStoreFile }) {
    return (
        <StoreFileSelector
            storeFile={ storeFile }
            className={ className }
            updateStoreFile={ updateStoreFile }
            useDefaultStoreFile={ useDefaultStoreFile }
        />
    );
}

const Connected = connect(
    state => ({
        storeFile: state.status.storeFile
    }),
    dispatch => ({
        updateStoreFile: () => dispatch(updateStoreFile()),
        useDefaultStoreFile: () => dispatch(useDefaultStoreFile())
    })
)(StoreFileSelectorContainer);

export default Connected;
