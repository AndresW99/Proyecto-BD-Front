import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { clearEvent, eventStartDelete, evnetStartLoading, productoSeleccionado } from '../actions/data';

import { uiOpenModal } from '../actions/ui';
import { Modals } from '../components/Modal';


export const CoffeScreen = () => {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    // Hace que la pagina elimine el evento sin recargar
    const [updateTrigger, setUpdateTrigger] = useState({});

    // Extraemos los productosd del state
    const { body } = useSelector( state => state.coffe );

    const dispatch = useDispatch();

    // Carga los productos y esta pendiente del body cuando se elimina
    useEffect(() => {

        setTimeout(() => {      
            dispatch( evnetStartLoading() );
        }, 200);

    }, [ dispatch, updateTrigger ]);

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
    const handleEliminar = async(e) => {

        dispatch( productoSeleccionado( e ) );
        // await dispatch( eventStartDelete() );

         await Swal.fire({
            title: 'Estas seguro?',
            text: "No podras revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo!'
          }).then((result) => {
            if (result.isConfirmed) {
               Swal.fire(
                'Eliminado!',
                'El producto fue eliminado.',
                'success'
              )
                dispatch( eventStartDelete() );
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
              ) {
                swalWithBootstrapButtons.fire(
                  'Cancelado',
                  'El producto esta a salvo :)',
                  'error'
                )
                dispatch( clearEvent() );
              }
          })

        setUpdateTrigger(Math.random() )
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
