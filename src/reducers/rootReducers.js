import { combineReducers } from 'redux';
import { authReducer } from '../auth/authReducer';
import { coffeReducer } from './coffeReducer';
import { uiReducer } from './uiReducer';

// Aqui llegan todos los reducers
export const rootReducer = combineReducers({
    coffe: coffeReducer,
    auth: authReducer,
    ui: uiReducer,
});