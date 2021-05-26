import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import './styles.css'

export const Navbar = () => {

    const { nombre } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {

        dispatch( startLogout() );

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand left" 
                to="/"
            >
                Cafeteria
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/productos"
                    >
                        Proveedores
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/empleados"
                    >
                        Empleados
                    </NavLink>
                </div>
            </div>

            <div className="w-200 order-3 dual-collapse2 mb-1">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info">
                        { nombre }
                    </span>

                    <button 
                        className="btn btn-outline-danger right" 
                        onClick={ handleLogout }
                    >
                        <i className="fas fa-sign-out-alt"></i>
                        <span> Salir</span>
                    </button>
                </ul>
            </div>
        </nav>
    )
}