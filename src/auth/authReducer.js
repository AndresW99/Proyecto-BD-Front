import { types } from '../types/types';

// El estado inicial de logeo es true
const initialState = {
    checking: true,
}

export const authReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        // Retornamos el estado, cambiamos el logeo a falso y retornamos el contenido
        case types.authLogin:
            
            return {
                ...state,
                checking: false,
                ...action.payload,
            }
    
        default:
            return state;
    }
}