import React from 'react';
import _ from 'lodash';
import Mousetrap from 'mousetrap';
import Help from './components/Help';
import {
    dialogClose,
    push,
    goBack,
    unsetActiveItem,
    clearSearch,
    lockStore,
    dialog
} from '../src/actions';

export function registerHotkeys (store) {
    const hotkeys = [
        {
            keys: ['esc'],
            action: () => esc(store)
        },
        {
            keys: ['command+n', 'ctrl+n'],
            action: dispatch(store, push('/create-item'))
        },
        {
            keys: ['command+l', 'ctrl+l'],
            action: dispatch(store, lockStore())
        },
        {
            keys: ['command+i', 'ctrl+i', '?'],
            action: dispatch(store, dialog(<Help />))
        },
        {
            keys: ['command+f', 'ctrl+f'],
            action: () => {
                document.querySelector('.search-input').focus();
            }
        }
    ];

    hotkeys.map(hotkey => Mousetrap.bind(hotkey.keys, hotkey.action));
}

function esc (store) {
    const { dialogs, item, search, router } = store.getState();

    if (dialogs.length) {
        store.dispatch(dialogClose());
    } else if(item) {
        store.dispatch(goBack());
        store.dispatch(unsetActiveItem());
    } else if (router.activeRoute === '/create-item') {
        store.dispatch(goBack());
    } else if (search.keyword) {
        store.dispatch(clearSearch());
    }

    return false;
}

function dispatch (store, action) {
    return () => {
        store.dispatch(action);

        return false;
    }
}
