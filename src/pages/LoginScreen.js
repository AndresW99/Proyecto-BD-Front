import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export const LoginScreen = () => {



    return (
        <>
            <form className="box" >
                <h1>Iniciar sesión</h1>
                <input 
                    type="text" 
                    name="" 
                    placeholder="Email" 
                />

                <input 
                    type="password" 
                    name="contraseña" 
                    placeholder="Contraseña" 
                />

                <input 
                    type="submit" 
                    name="" 
                    value="Entrar" 
                />

                <Link 
                    to="/register" 
                    className="link"
                >
                    Crear nuevo usuario
                </Link>
            </form>
        </>
    )
}