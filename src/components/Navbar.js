import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styles.css'
// import { clear } from '../../actions/events';

export const Navbar = () => {

    // const { name } = useSelector(state => state.auth)

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
                        Productos
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

            <div className="w-200 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info">
                        { 'Andres' }
                    </span>

                    <button 
                        className="nav-item nav-link btn" 
                    >
                        Salir
                    </button>
                </ul>
            </div>
        </nav>
    )
}