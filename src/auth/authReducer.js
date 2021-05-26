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
                ...action.payload,
                checking: false,
            }
        
        // Si ya esta registrado cambiamos el checking a falso
        case types.authCheckingFinish:

            return {
                ...state,
                checking: false
            }

        // Hacemos el logout limpiando todo y pasandolo a false
        case types.authLogout:

            return {
                checking: false
            }

        default:
            return state;
    }
}