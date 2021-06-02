import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { startLogin } from '../actions/auth';

import './styles.css'



export const LoginScreen = () => {

    const dispatch = useDispatch();
    
    const [ formLoginValues, handleLoginInputChange ] = useForm({
        correo: '',
        contrasenia: ''
    });

    const { correo, contrasenia } = formLoginValues

    // Login de acceso
    const handleLogin = ( e ) => {
        // Prevenimos que la pagina recarge
        e.preventDefault();
        dispatch( startLogin( correo, contrasenia ) );
    }

    return (
        <>
            <form 
                onSubmit={ handleLogin }
                className="box" 
                autoComplete="off"
            >
                <h1>Iniciar sesión</h1>
                <input 
                    type="text" 
                    name="correo" 
                    placeholder="Email" 
                    value={ correo }
                    onChange={ handleLoginInputChange }
                />

                <input 
                    type="password" 
                    name="contrasenia" 
                    placeholder="Contraseña"
                    value={ contrasenia }
                    onChange={ handleLoginInputChange } 
                />

                <input 
                    type="submit" 
                    value="Login" 
                    // onClick={ handleLogin }
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