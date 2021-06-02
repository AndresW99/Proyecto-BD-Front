import Swal from 'sweetalert2';
import { fetchConToken, fetchSinToken } from '../helpers/fetch'
import { types } from '../types/types';

// Proceso de autenticación

// Recibe por argumento el correo y contrasenia
export const startLogin = ( correo, contrasenia ) => {

    return async( dispatch ) => {

        // Llamamos al fetch sin token
        const resp = await fetchSinToken( 'auth', { correo, contrasenia }, 'POST' );
        const body = await resp.json();
   
        // Si todo se realizo correctamente guardamos token el localStorage
        if( resp.ok ) {
            localStorage.setItem( 'token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            
            // Grabamos la informacion en el store
            dispatch( login({
                id: body.id,
                nombre: body.nombre
            }))
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

// Inicia el registro grabando el token
export const startRegister = ( nombre, correo, contrasenia ) => {

    return async( dispatch ) => {

        // Llamamos al fetch sin token
        const resp = await fetchSinToken( 'auth/new', { nombre, correo, contrasenia }, 'POST' );
        const body = await resp.json();

        if( resp.ok ) {
            localStorage.setItem( 'token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            
            // Grabamos en la store el registro
            dispatch( login({
                id: body.id,
                nombre: body.nombre
            }))
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

// Hace el renew del token 
export const startChecking = () => {
    return async( dispatch ) => {

        // Llamamos al fetch sin token
        const resp = await fetchConToken( 'auth/renew' );
        const body = await resp.json();

        if( resp.ok ) {
            localStorage.setItem( 'token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            
            // Grabamos en la store el registro
            dispatch( login({
                id: body.id,
                nombre: body.nombre
            }))
        } else {
            dispatch( checkingFinish() );
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish })

// Llamamos al type de login
const login = ( usuario ) => ({

    type: types.authLogin,
    payload: usuario

});

// Hacemos la accion para el logout
export const startLogout = () => {

    return ( dispatch ) => {

        localStorage.clear();
        dispatch( logout() );
    }
}

const logout = () => ({ type: types.authLogout })