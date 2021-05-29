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
    
        default:
            return state;
    }
}