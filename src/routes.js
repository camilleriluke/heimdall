import React from 'react';
import { Switch, Route, Router } from 'react-router';
import { createHashHistory } from 'history';
import ProtectedRoute from './components/ProtectedRoute';
import Unlock from './pages/Unlock';
import Init from './pages/Init';
import EntryPoint from './pages/EntryPoint';
import Items from './pages/Items';
import NewEntry from './pages/NewEntry';

const Routes = () => (
    <Router history={ createHashHistory() }>
        <div>
            <Route path="/create-item" component={ NewEntry } />
            <Route path="/items" component={ Items } />
            <Route path="/unlock" component={ Unlock } />
            <Route path="/init" component={ Init } />
            <Route path="/" component={ EntryPoint } />
        </div>
    </Router>
)

export default Routes;