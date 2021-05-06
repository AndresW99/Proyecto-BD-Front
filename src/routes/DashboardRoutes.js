import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Empleados } from '../components/Empleados'
import { Navbar } from '../components/Navbar'
import { Productos } from '../components/Productos'
import { CoffeScreen } from '../pages/CoffeScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div>
                <Switch>

                    <Route exact path="/" component={ CoffeScreen } />
                    <Route exact path="/productos" component={ Productos } />
                    <Route exact path="/empleados" component={ Empleados } />

                    <Redirect to="/" />
                </Switch>
            </div>
        </>
    )
}
