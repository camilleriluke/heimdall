import fs from 'fs';
import React from 'react';
import _ from 'lodash';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import { get as getFromPersistedStore } from '../lib/store';
import { doesStoreExist, readRawStore, encryptStore } from './utils';
import Routes from './routes';
import './styles/main.scss';

const store = createStore(
    reducers,
    getInitialState(),
    applyMiddleware(thunk)
);

saveAndEncryptOnStoreChange(store);

ReactDOM.render(
    <Provider store={ store }>
        <Routes></Routes>
    </Provider>,
    document.getElementById('root')
);

function saveAndEncryptOnStoreChange (store) {
    store.subscribe(() => {
        const state = store.getState();
        const items = state.items;
        const locked = state.status.locked;
        const password = state.status.password;

        if (!locked && password) {
            encryptStore({ items, password });
        }
    });
}

function getInitialState () {
    const persistedStatus = getFromPersistedStore('status');
    const persistedItems = getFromPersistedStore('items');

    return {
        items: persistedItems || [],
        status: {
            locked: _.get(persistedStatus, 'locked', true),
            password: _.get(persistedStatus, 'password', null),
            doesStoreExist: doesStoreExist()
        }
    };
}