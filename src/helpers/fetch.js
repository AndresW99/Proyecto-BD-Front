/*
    endpoint = el / al que nos queremos comunicar
    data = la respuesta que queremos recibir
    method = el tipo de peticion
*/

// conexion al backend
const baseUrl = process.env.REACT_APP_API_URL;

const fetchSinToken = ( endpoint, data, method = 'GET' ) =>{

    const url = `${ baseUrl }/${ endpoint }`;

    // Si es un get retornamos el producto
    if( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            // Los headers unicamente enviaran formato JSON
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}

const fetchConToken = ( endpoint, data, method = 'GET' ) =>{

    const url = `${ baseUrl }/${ endpoint }`;
    
    // Obtenemos el token del localStorage
    const token = localStorage.getItem('token') || '';

    // Si es un get retornamos el producto y mandamos el token
    if( method === 'GET' ) {
        return fetch( url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {
        return fetch( url, {
            method,
            // Los headers unicamente enviaran formato JSON
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
        });
    }
}

export {
    fetchSinToken,
    fetchConToken
}
