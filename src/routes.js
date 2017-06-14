import React from 'react';
import { createHashHistory } from 'history';
import Unlock from './pages/Unlock';
import Init from './pages/Init';
import EntryPoint from './pages/EntryPoint';
import Items from './pages/Items';
import Item from './pages/Item';
import NewItem from './pages/NewItem';
import Route from './components/Route';
import ProtectedRoute from './components/ProtectedRoute';

const Routes = () => (
    <div>
        <ProtectedRoute path="/create-item"><NewItem /></ProtectedRoute>
        <ProtectedRoute path="/items"><Items /></ProtectedRoute>
        <ProtectedRoute path="/item"><Item /></ProtectedRoute>
        <Route path="/unlock"><Unlock /></Route>
        <Route path="/init"><Init /></Route>
        <Route path="/"><EntryPoint /></Route>
    </div>
)

export default Routes;