import { combineReducers } from 'redux';
import { authReducer } from '../auth/authReducer';
import { coffeReducer } from './coffeReducer';
import { empleadoReducer } from './empleadoReducer';
import { proveedoresReducer } from './proveedoresReducer';
import { uiReducer } from './uiReducer';

// Aqui llegan todos los reducers
export const rootReducer = combineReducers({
    coffe: coffeReducer,
    auth: authReducer,
    ui: uiReducer,
    prov: proveedoresReducer,
    emp: empleadoReducer,
});