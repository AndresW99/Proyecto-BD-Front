export const types = {

    uiEventSetActive: '[data] Evento seleccionado', // Setea la fila seleccionada en el active
    provSetActive: '[prov] Proveedor seleccionado',

    agregarProducto: '[data] Agregar producto', // Agrega un producto 
    agregarProv: '[prov] Agregar proveedor',
    agregarEmp: '[emp] Agregar empleado',

    //Limpiar active
    eventClearEvent: '[data] Limpiar el evento activo', // Limpia el campo active
    provClearEvent: '[prov] Limpiar el evento activo',

    // Eliminar evento
    eventDeleted: '[data] Eliminar evento',
    provDeleted: '[prov] Eliminar proveedor',

    //Carga los eventos
    eventLoaded: '[data] Eventos cargados',
    provLoaded: '[prov] Eventos cargados',
    empLoaded: '[emp] Empleados cargados',

    // Types para el funcionamiento de la UI
    uiOpenModal: '[ui] Open Modal',
    uiCloseModal: '[ui] Close Modal',
    uiOpenModalActu: '[ui] Actu Modal',
    
    // Types para el manejo de los datos de la API
    eventStartAddNew: '[data] Agrega un nuevo producto a bd',

    // Actualiza eventos
    provActualizado: '[prov] Proveedor actualizo',
    uiEventActualizado: '[data] Evento actualizado', 

    // Types para el funcionamiento de la autenticación
    authCheckingFinish: '[auth] Finish checking login state',
    authStartLogin: '[auth] Start login',
    authLogin: '[auth] Login',
    authStartRegister: '[auth] Start Register',
    authStartStartTokenRenew: '[auth] Start token renew',
    authLogout: '[auth] Logout'

}
