import React from 'react';
import { createHashHistory } from 'history';
import ProtectedRoute from './components/ProtectedRoute';
import Unlock from './pages/Unlock';
import Init from './pages/Init';
import EntryPoint from './pages/EntryPoint';
import Items from './pages/Items';
import NewEntry from './pages/NewEntry';
import Route from './components/Route';

const Routes = () => (
    <div>
        <Route path="/create-item"><NewEntry /></Route>
        <Route path="/items"><Items /></Route>
        <Route path="/unlock"><Unlock /></Route>
        <Route path="/init"><Init /></Route>
        <Route path="/"><EntryPoint /></Route>
        {/*<Fragment forRoute="/create-item"><NewEntry /></Fragment>
        <Fragment forRoute="/items"><Items /></Fragment>
        <Fragment forRoute="/unlock"><Unlock /></Fragment>
        <Fragment forRoute="/init"><Init /></Fragment>
        <Fragment forRoute="/"><EntryPoint /></Fragment>*/}
    </div>
)

export default Routes;