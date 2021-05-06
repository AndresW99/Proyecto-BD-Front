import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { LoginScreen } from '../pages/LoginScreen';
import { RegisterScreen } from '../pages/RegisterScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path="/login" component={ LoginScreen } />

          <Route exact path="/register" component={ RegisterScreen } />

          <Route path="/" component={ DashboardRoutes } />

          <Redirect to="/" />

        </Switch>
      </div>
    </Router>
  );
}