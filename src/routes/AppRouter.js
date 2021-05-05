import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { CoffeScreen } from '../pages/CoffeScreen';
import { LoginScreen } from '../pages/LoginScreen';

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />

      <div>
        <Switch>
          <Route path="/login">
            <LoginScreen />
          </Route>

          <Route path="/">
            <CoffeScreen />
          </Route>

          <Redirect to="/" />

        </Switch>
      </div>
    </Router>
  );
}