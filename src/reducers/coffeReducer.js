import { types } from '../types/types';


const initialState = {
    body: [],
    active: null
}

export const coffeReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        // Trae eventos fer
        case types.eventLoaded:

            return {
                ...state,
                body: [ ...action.payload ]
            }

        // Agrega un producto
        case types.agregarProducto:

            return {
                ...state,
                body: [
                    ...state.body,
                    action.payload
                ]
            }

        // Setea el objeto en el campo active
        case types.uiEventSetActive:

            return {
                ...state,
                active: action.payload
            }

        // Regresa a null el evento activo luego de cerrar el modal
        case types.eventClearEvent:

            return {
                ...state,
                active: null
            }

        // Actualiza los eventos
        case types.uiEventActualizado:
            
            return {
                ...state,
                body: state.body.map(
                    b => ( b.id === action.payload.id ) ? action.payload : b
                )
            }
        
        // Elimina los eventos
        case types.eventDeleted:
            
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