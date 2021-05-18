import { fetchSinToken } from '../helpers/fetch'
import { types } from '../types/types';

// Proceso de autenticación

// Recibe por argumento el correo y contrasenia
export const startLogin = ( correo, contrasenia ) => {

    return async( dispatch ) => {

        // Llamamos al fetch sin token
        const resp = await fetchSinToken( 'auth', { correo, contrasenia }, 'POST' );
        const body = await resp.json();

        
        // Si todo se realizo correctamente guardamos token el localStorage
        if( body ) {
            localStorage.setItem( 'token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            
            // Grabamos la informacion en el store
            dispatch( login({
                id: body.usuario.id,
                nombre: body.usuario.nombre
            }))
        }
    }
}

// Llamamos al type de login
const login = ( usuario ) => ({

    type: types.authLogin,
    payload: usuario

});