// import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProductos, productoSeleccionado } from '../actions/data';

import { uiOpenModal } from '../actions/ui';
import { Modals } from '../components/Modal';
// import { ModalActualizar } from '../components/Modals/productos/ModalActualizar';

export const CoffeScreen = () => {

    // Extraemos los productosd del state
    const { body } = useSelector( state => state.coffe );

    const dispatch = useDispatch();

    // const baseUrl = 'http://localhost:8080/api/productos'
    // const [ data, setData ] = useState([]);

    // const peticionGet = async() => {

    //     await axios.get( baseUrl )
    //         .then( res => {
    //             setData( res.data );
    //         })
    // }

    // useEffect(() => {

    //     peticionGet();

    // }, [])

    // Abrimos el modal
    const handleAgregar = (e) => {

        dispatch( uiOpenModal() );

    }

    // Esto pone el objeto seleccionado en el active del store
    const handleActua = (e) => {

        dispatch( productoSeleccionado(e) );
        dispatch( uiOpenModal() );
    }

    const handleDatos = ( e ) => {
        // Prevenimos que la pagina recarge
        e.preventDefault();
        dispatch( getProductos() );
    }

    return (
        <div className="mt-5">
            
        <h1>Listado de productos</h1>
        <hr/>

        <input 
            type="text"
            className="mb-2 form-control"
            placeholder="Buscar producto"
        />

        <hr />

        <button 
            className="btn btn-primary"
        >
            Anteriores
        </button>
        &nbsp;
        <button 
            className="btn btn-primary"
            onClick={handleDatos}
        >
            Siguientes
        </button>

        <button
            className="btn btn-outline-success float-end"
            onClick={ handleAgregar }
        >
            Agregar
        </button>

        <hr/>

        <table className="table table-dark table-striped table-hover table-bordered">
            <thead>
                <tr>
                    <th style={{ width: 100 }}>ID</th>
                    <th style={{ width: 150 }}>Nombre</th>
                    <th style={{ width: 150 }}>Precio</th>
                    <th style={{ width: 150 }}>Stock</th>
                    {/* <th style={{ width: 150 }}>Proveedor</th> */}
                    <th style={{ width: 150 }}>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {body && body.map( b =>   //FIXME: Regresar a su estado anterior cuando tenga ID estable
                    <tr key={b.nombre}>
                        <td>{b.id}</td>
                        <td>{b.nombre}</td>
                        <td>{b.precio}</td>
                        <td>{b.stock}</td>
                        {/* <td>{b.proveedor.nombre}</td> */}
                        <td>
                            <button 
                                className="btn btn-info btn-sm"
                                onClick={() => handleActua(b) }
                                >
                                Editar
                            </button>
                            &nbsp;
                            <button className="btn btn-danger btn-sm">Eliminar</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>

        <Modals />

        {/* <ModalActualizar /> */}

    </div>
    )
}
