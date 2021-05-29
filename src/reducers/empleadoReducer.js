import { types } from '../types/types';

const initialState = {

    body: [],
    active: null

}

export const empleadoReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        // Trae eventos fer
        case types.empLoaded:

            return {
                ...state,
                body: [ ...action.payload ]
            }

        // Agrega un producto
        case types.agregarEmp:

            return {
                ...state,
                body: [
                    ...state.body,
                    action.payload
                ]
            }
        
        // Pone el objeto en el active del store
        case types.empSetActive:

            return {
                ...state,
                active: action.payload
            }

        // Cambia a null el evento activo
        case types.empClearEvent:

            return {
                ...state,
                active: null
            }

        // Actualiza el usuario
        case types.empActualizado: 

            return {
                ...state,
                body: state.body.map(
                    b => ( b.id === action.payload.id ) ? action.payload : b
                )
            }
            
        // Eliminar usuario de la BD
        case types.empDeleted:

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