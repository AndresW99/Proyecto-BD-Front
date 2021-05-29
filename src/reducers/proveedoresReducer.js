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
    
        default:
            return state;
    }

}