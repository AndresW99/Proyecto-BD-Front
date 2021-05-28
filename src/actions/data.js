import { fetchConToken } from '../helpers/fetch'
import { types } from '../types/types';


// Agregar producto en BD
export const eventStartAddNew = ( event ) => {

    return async( dispatch, getState ) => {

        const { id, nombre } = getState().auth;

        try {
    
            const resp = await fetchConToken('productos', event, 'POST');
            const body = await resp.json();

            console.log(body);
            
            if( body ) {
                event.id = body.id;
                event.user = {
                    id: id,
                    nombre: nombre
                }
                dispatch( agregar( event ) );
            }

        } catch (error) {
            console.log( error );
        }

    }
}

// Agrega un producto
const agregar = ( usuario ) => ({

    type: types.agregarProducto,
    payload: usuario

});

// Actualiza el producto de la lista
export const productoActualizado = ( event ) => ({

    type: types.uiEventActualizado,
    payload: event

});

// Posiciona el producto en el campo active
export const productoSeleccionado = ( usuario ) => ({

    type: types.uiEventSetActive,
    payload: usuario

});

// Elimina el evento
export const eventDeleted = () => ({ type: types.eventDeleted });

// Limpia el campo de active
export const clearEvent = () => ({ type: types.eventClearEvent });

export const evnetStartLoading = () => {

    return async( dispatch ) => {

        try {
            
            const resp = await fetchConToken( 'productos' );
            const body = await resp.json();

            const producs = body;

            dispatch( eventLoaded( producs ) );

        } catch (error) {
            console.log(error);
        }

    }
}

const eventLoaded = ( events ) => ({
    type: types.eventLoaded,
    payload: events
})