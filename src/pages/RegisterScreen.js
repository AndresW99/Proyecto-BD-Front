import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export const RegisterScreen = () => {



    return (
        <>
            <form className="box" >
                <h1>Registro</h1>
                <input 
                    type="text" 
                    name="" 
                    placeholder="Nombre" 
                />

                <input 
                    type="text" 
                    name="" 
                    placeholder="Correo" 
                />

                <input 
                    type="password" 
                    name="contraseña" 
                    placeholder="Contraseña" 
                />

                <input 
                    type="submit" 
                    name="" 
                    value="Ingresar" 
                />

                <Link 
                    to="/login" 
                    className="link"
                >
                    Ya tienes una cuenta?
                </Link>
            </form>
        </>
    )
}