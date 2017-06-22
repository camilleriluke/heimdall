import React from 'react';
import './StoreFileSelector.scss';

export default function StoreFileSelector ({ storeFile, className, updateStoreFile, useDefaultStoreFile }) {
    return (
        <div className={ `store-file-name ${ className }` }>
            { storeFile }
            <br />
            <span className='store-file-action' onClick={ updateStoreFile }>Change</span>
            <span className='store-file-action' onClick={ useDefaultStoreFile }>Use default</span>
        </div>
    );
}