import fs from 'fs';
import React from 'react';
import _ from 'lodash';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerForBrowser, RouterProvider } from 'redux-little-router';
import ReactDOM from 'react-dom';
import Routes from './routes';
import reducers from './reducers';
import { get as getFromPersistedStore } from '../lib/store';
import { doesStoreExist, readRawStore, encryptStore } from './utils';
import routesConfig from './routes.config';
import './styles/main.scss';

const routerConfig = routerForBrowser({ routes: routesConfig });
const routerMiddleware = routerConfig.middleware;
const routerEnhancer = routerConfig.enhancer;

const store = createStore(
    reducers,
    getInitialState(),
    compose(routerEnhancer, applyMiddleware(routerMiddleware, thunk))
);

saveAndEncryptOnStoreChange(store);

ReactDOM.render(
    <Provider store={ store }>
        <RouterProvider store={ store }>
            <Routes></Routes>
        </RouterProvider>
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