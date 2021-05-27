import { types } from '../types/types';


const initialState = {
    body: [{
        id: 1,
        nombre: "andres",
        precio: "100",
        stock: "100",
        proveedor: 3,
        ID: 2
    }],
    active: null
}

export const coffeReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.dataProductos: 
            return {
                ...state,
                ...action.payload,
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

        // En teoria regresa a null el evento activo //FIXME: Hay que arreglarlo
        case types.eventClearEvent: 
        return {
            ...state,
            active: null
        }

        case types.uiEventActualizado:
            return {
                ...state,
                body: state.body.map(
                    b => ( b.id === action.payload.id ) ? action.payload : b
                )
            }
    
        default:
            return state;
    }

}