export const types = {

    // Types para el funcionamiento de la UI
    uiOpenModal: '[ui] Open Modal',
    uiCloseModal: '[ui] Close Modal',
    uiOpenModalActu: '[ui] Actu Modal',
    
    // Types para el manejo de los datos de la API
    dataProductos: '[data] Obtener productos',
    agregarProducto: '[data] Agregar producto',
    uiEventActualizado: '[data] Evento actualizado', 
    uiEventSetActive: '[data] Evento seleccionado',
    eventClearEvent: '[data] Limpiar el evento activo',

    // Types para el funcionamiento de la autenticación
    authCheckingFinish: '[auth] Finish checking login state',
    authStartLogin: '[auth] Start login',
    authLogin: '[auth] Login',
    authStartRegister: '[auth] Start Register',
    authStartStartTokenRenew: '[auth] Start token renew',
    authLogout: '[auth] Logout'

}
