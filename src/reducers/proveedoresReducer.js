import { types } from '../types/types';

const initialState = {

    body: [],
    active: null

}

export const proveedoresReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        // Trae eventos fer
        case types.provLoaded:

            return {
                ...state,
                body: [ ...action.payload ]
            }

        // Agrega un producto
        case types.agregarProv:

            return {
                ...state,
                body: [
                    ...state.body,
                    action.payload
                ]
            }
        
        // Lo pone en el active del store
        case types.provSetActive:

            return {
                ...state,
                active: action.payload
            }

        // Limpia el active al cerrar el modal
        case types.provClearEvent:

            return {
                ...state,
                active: null
            }

        // Actualiza el proveedor
        case types.provActualizado:

            return {
                ...state,
                body: state.body.map(
                    b => ( b.id === action.payload.id ) ? action.payload : b
                )
            }

        // Elimina de la BD
        case types.provDeleted: 

            return {
                ...state,
                body: state.body.filter(
                    b => ( b.id !== state.id ) 
                ),
                active: null
            }
    
        default:
            return state;
    }

}