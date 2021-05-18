import { combineReducers } from 'redux';
import { authReducer } from '../auth/authReducer';

// Aqui llegan todos los reducers
export const rootReducer = combineReducers({
    auth: authReducer
});