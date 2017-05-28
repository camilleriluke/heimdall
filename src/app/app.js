import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

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

let store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk),
);

ReactDOM.render(
    <Provider store={ store }>
        <Routes></Routes>
    </Provider>,
    document.getElementById('root')
);
