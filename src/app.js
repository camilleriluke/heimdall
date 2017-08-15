import fs from 'fs';
import React from 'react';
import _ from 'lodash';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import { get as getFromPersistedStore } from '../lib/store';
import config from '../default.config';
import { doesStoreExist, readRawStore, encryptStore } from './utils';
import Routes from './routes';
import { registerHotkeys } from './hotkeys';
import './styles/main.scss';

const store = createStore(
    reducers,
    getInitialState(),
    applyMiddleware(thunk)
);

saveAndEncryptOnStoreChange(store);
registerHotkeys(store);

ReactDOM.render(
    <Provider store={ store }>
        <Routes></Routes>
    </Provider>,
    document.getElementById('root')
);

function saveAndEncryptOnStoreChange (store) {
    store.subscribe(() => {
        const state = store.getState();
        const items = state.items.raw;
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

    if (!doesStoreExist()) {
        return {
            items: {
                raw: [],
                filtered: []
            },
            status: {
                locked: true,
                password: null,
                doesStoreExist: false
            }
        };
    }

    return {
        items: {
            raw: persistedItems || [],
            filtered: persistedItems || [],
        },
        status: {
            locked: _.get(persistedStatus, 'locked', true),
            password: _.get(persistedStatus, 'password', null),
            storeFile: _.get(persistedStatus, 'storeFile', config.defaultStore),
            doesStoreExist: true
        }
    };
}