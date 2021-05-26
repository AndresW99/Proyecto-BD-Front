import { types } from "../types/types";


const initialState = {
    modalOpen: false,
}

export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        // Abrimos el modal cambiando el estado a true
        case types.uiOpenModal:
            return {
                ...state,
                modalOpen: true
            }
            
        // Cerramos el modal cambiando el estado a false
        case types.uiCloseModal: 
            return {
                ...state,
                modalOpen: false
            }
        
        // Abrir el modal para actualizar
        case types.uiOpenModalActu:
            return {
                ...state,
                modalOpen: true
            }

    
        default:
            return state;
    }

}