import Swal from 'sweetalert2';

import { fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';


// Posicion al proveedor en el campo active
export const empleadoSeleccionado = ( event ) => ({
    type: types.empSetActive,
    payload: event
});

// Limpia el evento del active
export const clearEmp = () => ({ type: types.empClearEvent });

// Actualiza en bd usuarios
export const empStartUpdate = ( event ) => {

    return async( dispatch ) => {

        try {

            const resp = await fetchConToken(`usuarios/${ event.id }`, event, 'PUT');
            const body = await resp.json();

            if( body ) {
                dispatch( empActualizado( event ) )
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error);
        }
    }
}

// Actualiza el empleado
const empActualizado = ( event ) => ({
    type: types.empActualizado,
    payload: event
});

// Elimina de la BD
export const empStartDelete = () =>{

    return async( dispatch, getState ) => {

        const { id } = getState().emp.active;

        try {

            const resp = await fetchConToken(`usuarios/${ id }`, {}, 'DELETE');
            const body = await resp.json();

            if( body.id ) {
                dispatch( empDelete() )
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error);
        }

    }
}

// Elimina el usuario
const empDelete = () => ({ type: types.empDeleted });