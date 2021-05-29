import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2';

import { clearProv, proveedorSeleccionado, proveStartLoading, provStartDelete } from '../actions/data';
import { uiOpenModal } from '../actions/ui';
import { ModalProv } from './ModalProv';

export const Proveedores = () => {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    // Hace que la pagina elimine el evento sin recargar
    const [updateTrigger, setUpdateTrigger] = useState({});

    const dispatch = useDispatch();
    const { body } = useSelector( state => state.prov );

    useEffect(() => {

        setTimeout(() => {
            dispatch(proveStartLoading() );
        }, 200);

    }, [ dispatch, updateTrigger ]);


    const handleAgregar = () => {

        dispatch( uiOpenModal() );

    }

    // Esto pone el objeto seleccionado en el active del store
    const handleActua = (e) => {

        dispatch( proveedorSeleccionado( e ) );
        dispatch( uiOpenModal() );
    }

    const handleEliminar = async( e ) => {

        dispatch( proveedorSeleccionado( e ) );

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
                'El proveedor fue eliminado.',
                'success'
              )
                dispatch( provStartDelete() );
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
              ) {
                swalWithBootstrapButtons.fire(
                  'Cancelado',
                  'El proveedor esta a salvo :)',
                  'error'
                )
                dispatch( clearProv() );
              }
          })

        setUpdateTrigger(Math.random() )

    }
    


    return (
        <div className="mt-5">
                
            <h1>Listado de proveedores</h1>
            <hr/>

            <input 
                type="text"
                className="mb-2 form-control"
                placeholder="Buscar proveedor..."
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

            <hr />

            <table className="table table-dark table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th style={{ width: 100 }}>ID</th>
                        <th style={{ width: 150 }}>Nombre</th>
                        <th style={{ width: 150 }}>Creado por:</th>
                        <th style={{ width: 150 }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {body && body.map( b=>                
                        <tr key={ b.id }>
                            <td>{ b.id }</td>
                            <td>{ b.nombre }</td>
                            <td>{b.usuario}</td>
                            <td>
                                <button 
                                    className="btn btn-info btn-sm"
                                    onClick={ () => handleActua( b ) }
                                >
                                    Editar
                                </button>
                                &nbsp;
                                <button 
                                    className="btn btn-danger btn-sm"
                                    onClick={ () => handleEliminar( b ) }
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                
                    )}
                </tbody>
            </table>

        <ModalProv />

        </div>
    )
}
