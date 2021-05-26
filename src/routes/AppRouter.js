import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import { startChecking } from '../actions/auth';

import { LoginScreen } from '../pages/LoginScreen';
import { RegisterScreen } from '../pages/RegisterScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const dispatch = useDispatch();
  const { checking, id } = useSelector( state => state.auth );

  // Revisa si el checking cambia de estado
  useEffect(() => {

    dispatch( startChecking() )

  }, [ dispatch ]);

  // TODO: Agregar un componente de carga animado.
  // No mostrara ninguna otra pantalla hasta que el checking este en false
  if( checking ) {
    return (<h5>Espere...</h5>);   
  }

  return (
    <Router>
      <div>
        <Switch>

          <PublicRoute 
            exact 
            path="/login"
            component={ LoginScreen } 
            isAuthenticated={ !!id }
          />

          <PublicRoute 
            exact 
            path="/register" 
            component={ RegisterScreen } 
            isAuthenticated={ !!id }
          />

          <PrivateRoute
            path="/" 
            component={ DashboardRoutes } 
            isAuthenticated={ !!id }
          />

          <Redirect to="/" />

        </Switch>
      </div>
    </Router>
  );
}