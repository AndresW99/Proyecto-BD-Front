import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Empleados } from '../components/Empleados'
import { Navbar } from '../components/Navbar'
import { Proveedores } from '../components/Proveedores'
import { CoffeScreen } from '../pages/CoffeScreen'

export const DashboardRoutes = () => {


    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>

                    <Route exact path="/" component={ CoffeScreen } />
                    <Route exact path="/productos" component={ Proveedores } />
                    <Route exact path="/empleados" component={ Empleados } />

                    <Redirect to="/" />
                </Switch>
            </div>
        </>
    )
}
