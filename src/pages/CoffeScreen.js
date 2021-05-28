// import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { eventStartDelete, evnetStartLoading, productoSeleccionado } from '../actions/data';

import { uiOpenModal } from '../actions/ui';
import { Modals } from '../components/Modal';


export const CoffeScreen = () => {

    // Extraemos los productosd del state
    const { body } = useSelector( state => state.coffe );

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch( evnetStartLoading() );

    }, [ dispatch ]);

    // Abrimos el modal
    const handleAgregar = (e) => {

        dispatch( uiOpenModal() );
        
    }

    // Esto pone el objeto seleccionado en el active del store
    const handleActua = (e) => {

        dispatch( productoSeleccionado( e ) );
        dispatch( uiOpenModal() );

    }

    // Eliminar productos
    const handleEliminar = (e) => {

        dispatch( productoSeleccionado(e) );
        dispatch( eventStartDelete() );

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
                    <th style={{ width: 150 }}>Proveedor</th>
                    <th style={{ width: 150 }}>Creado</th>
                    <th style={{ width: 150 }}>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {body && body.map( b =>
                    <tr key={b.id}>
                        <td>{b.id}</td>
                        <td>{b.nombre}</td>
                        <td>{b.precio}</td>
                        <td>{b.stock}</td>
                        <td>{b.Proveedore.nombre}</td> 
                        <td>{b.Usuario.nombre}</td>
                        <td>
                            <button 
                                className="btn btn-info btn-sm"
                                onClick={() => handleActua(b) }
                            >
                                Editar
                            </button>
                            &nbsp;
                            <button 
                                className="btn btn-danger btn-sm"
                                onClick={ () => handleEliminar(b) }
                            >
                                Eliminar
                            </button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>

        <Modals />

    </div>
    )
}
