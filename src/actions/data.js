import Swal from 'sweetalert2';

import { fetchConToken, fetchSinToken } from '../helpers/fetch'
import { types } from '../types/types';


// Agregar producto en BD
export const eventStartAddNew = ( event ) => {

    return async( dispatch, getState ) => {
        
        try {
            
            const resp = await fetchConToken('productos', event, 'POST')
            const body = await resp.json();

            if( body.id ) {
                // Agarra el id y lo agrega
                // event.id = body.id;

                console.log(body);
                dispatch( agregar( body ) )
            }

        } catch (error) {
            console.log(error);
        }
    }
}

// Agrega un producto
const agregar = ( usuario ) => ({

    type: types.agregarProducto,
    payload: usuario

});

// Agregar proveedor en BD
export const provStartAddNew = ( event ) => {

    return async( dispatch, getState ) => {
        
        try {
            
            const resp = await fetchConToken('proveedor', event, 'POST')
            const body = await resp.json();

            if( body.id ) {
                // Agarra el id y lo agrega
                // event.id = body.id;

                console.log(body);
                dispatch( agregarProv( body ) )
            }

        } catch (error) {
            console.log(error);
        }
    }
}

// Agrega un producto al body
const agregarProv = ( event ) => ({
    type: types.agregarProv,
    payload: event
})

// Actualiza en bd
export const eventStartUpdate = ( event ) => {

    return async( dispatch ) => {

        try {

            const resp = await fetchConToken(`productos/${ event.id }`, event, 'PUT');
            const body = await resp.json();

            if( body ) {
                dispatch( productoActualizado( event ) )
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error);
        }

    }
}

// Actualiza el producto de la lista
const productoActualizado = ( event ) => ({

    type: types.uiEventActualizado,
    payload: event

});

// Posiciona el producto en el campo active
export const productoSeleccionado = ( usuario ) => ({

    type: types.uiEventSetActive,
    payload: usuario

});

// Elimina de la BD
export const eventStartDelete = () =>{

    return async( dispatch, getState ) => {

        const { id } = getState().coffe.active;

        try {

            const resp = await fetchConToken(`productos/${ id }`, {}, 'DELETE');
            const body = await resp.json();

            if( body ) {
                dispatch( eventDelete() )
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error);
        }

    }
}

// Elimina el evento
const eventDelete = () => ({ type: types.eventDeleted });

// Limpia el campo de active
export const clearEvent = () => ({ type: types.eventClearEvent });

// Carga a los productos
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

// Carga los proveedores
export const proveStartLoading = () =>{

    return async( dispatch ) => {

        try {
            
            const resp = await fetchSinToken( 'proveedor' );
            const body = await resp.json();

            const producs = body;

            dispatch( provLoad( producs ) );

        } catch (error) {
            console.log(error);
        }
    }
}

// Carga los empleados
export const empStartLoading = () =>{

    return async( dispatch ) => {

        try {
            
            const resp = await fetchSinToken( 'usuarios' );
            const body = await resp.json();

            const producs = body;

            dispatch( empLoad( producs ) );

        } catch (error) {
            console.log(error);
        }
    }
}

// Setea los objetos en el store
const eventLoaded = ( events ) => ({
    type: types.eventLoaded,
    payload: events
})

// Setea los objetos en el store
const provLoad = ( events ) => ({
    type: types.provLoaded,
    payload: events
})

// Setea a los empleados en el store
const empLoad = ( events ) => ({
    type: types.empLoaded,
    payload: events
})