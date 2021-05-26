import { fetchSinToken } from '../helpers/fetch'
import { types } from '../types/types';

// Proceso de autenticación

// Recibe por argumento el correo y contrasenia
export const getProductos = ( id, nombre, precio, stock ) => {

    return async( dispatch ) => {

        // Llamamos al fetch sin token
        const resp = await fetchSinToken( 'productos', { id, nombre, precio, stock }, 'GET' );
        const body = await resp.json();

        // Si todo se realizo correctamente guardamos token el localStorage
        if( body ) {
            
            // Grabamos la informacion en el store
            dispatch( data({
                body
            }))
        }
    }
}

// Llamamos al type de login
const data = ( usuario ) => ({

    type: types.dataProductos,
    payload: usuario

});

// Agrega un producto
export const agregar = ( usuario ) => ({

    type: types.agregarProducto,
    payload: usuario

});

// Actualiza el producto de la lista
export const productoActualizado = ( event ) => ({

    type: types.uiEventActualizado,
    payload: event

});

// Seleccioan el producto en el campo active
export const productoSeleccionado = ( event ) => ({

    type: types.uiEventSetActive,
    payload: event

});

// Limpia el campo de active
export const clearEvent = () => ({ type: types.eventClearEvent });