import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Unlock from './pages/Unlock';
import Entries from './pages/Entries';

const Routes = () => (
    <Router>
        <div>
            <ProtectedRoute path="/entries" component={ Entries } />
            <Route component={ Unlock } />
        </div>
    </Router>
)

export default Routes;