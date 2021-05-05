import { types } from '../types/types';

const initialState = {
    pedirUsers: true
}


export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.uiPedirUsers:
            return {
                ...state,
                pedirUsers: true
            }    
    
        default:
            return state;
    }

}