import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import Routes from './routes';
import reducers from './reducers';
import { doesStoreExist, readRawStore } from './utils';

const initialState = {
    status: {
        locked: true,
        doesStoreExist: doesStoreExist()
    }
};

let store = createStore(reducers, initialState);

ReactDOM.render(
    <Provider store={ store }>
        <Routes></Routes>
    </Provider>,
    document.getElementById('root')
);
