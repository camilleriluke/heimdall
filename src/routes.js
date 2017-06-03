import React from 'react';
import { Switch, Route, Router } from 'react-router';
import { createHashHistory } from 'history';
import { Fragment } from 'redux-little-router';
import ProtectedRoute from './components/ProtectedRoute';
import Unlock from './pages/Unlock';
import Init from './pages/Init';
import EntryPoint from './pages/EntryPoint';
import Items from './pages/Items';
import NewEntry from './pages/NewEntry';

const Routes = () => (
    <div>
        <Fragment forRoute="/create-item"><NewEntry /></Fragment>
        <Fragment forRoute="/items"><Items /></Fragment>
        <Fragment forRoute="/unlock"><Unlock /></Fragment>
        <Fragment forRoute="/init"><Init /></Fragment>
        <Fragment forRoute="/"><EntryPoint /></Fragment>
    </div>
)

export default Routes;