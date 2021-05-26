import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { startRegister } from '../actions/auth';

import { useForm } from '../hooks/useForm';

import './styles.css'

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    
    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        nombre: '',
        correo: '',
        contrasenia: ''
    });

    const { nombre, correo, contrasenia } = formRegisterValues;

    // Login de acceso
    const handleRegister = ( e ) => {
        // Prevenimos que la pagina recarge
        e.preventDefault();

        // Validamos que los campos no esten vacios
        if( correo <= 0 ) {
            return Swal.fire('Error', 'El correo es obligatorio', 'error');
        }

        if( nombre <= 0 ) {
            return Swal.fire('Error', 'El nombre es obligatorio', 'error');
        }

        if( contrasenia <= 0 ) {
            return Swal.fire('Error', 'La contraseña es obligatoria', 'error');
        }

        dispatch( startRegister( nombre, correo, contrasenia ))
    }

    //TODO: Borrar el auto completado de las cajas

    return (
        <>
            <form 
                className="box" 
                onSubmit={ handleRegister }
                autoComplete="off"
            >
                <h1>Registro</h1>
                <input 
                    type="text" 
                    name="nombre" 
                    placeholder="Nombre" 
                    value={ nombre }
                    onChange={ handleRegisterInputChange }
                />

                <input 
                    type="text" 
                    name="correo" 
                    placeholder="Correo" 
                    value={ correo }
                    onChange={ handleRegisterInputChange }
                />

                <input 
                    type="password" 
                    name="contrasenia" 
                    placeholder="Contraseña" 
                    value={ contrasenia }
                    onChange={ handleRegisterInputChange }
                />

                <input 
                    type="submit" 
                    name="contrasenia" 
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