export const types = {

    uiEventSetActive: '[data] Evento seleccionado', // Setea la fila seleccionada en el active
    agregarProducto: '[data] Agregar producto', // Agrega un producto 
    eventClearEvent: '[data] Limpiar el evento activo', // Limpia el campo active

    // Types para el funcionamiento de la UI
    uiOpenModal: '[ui] Open Modal',
    uiCloseModal: '[ui] Close Modal',
    uiOpenModalActu: '[ui] Actu Modal',
    
    // Types para el manejo de los datos de la API
    
    dataProductos: '[data] Obtener productos',
    eventStartAddNew: '[data] Agrega un nuevo producto a bd',
    uiEventActualizado: '[data] Evento actualizado', 

    // Types para el funcionamiento de la autenticación
    authCheckingFinish: '[auth] Finish checking login state',
    authStartLogin: '[auth] Start login',
    authLogin: '[auth] Login',
    authStartRegister: '[auth] Start Register',
    authStartStartTokenRenew: '[auth] Start token renew',
    authLogout: '[auth] Logout'

}
