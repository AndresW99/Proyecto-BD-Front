import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2';

import { clearProv, proveedorSeleccionado, proveStartLoading, provStartDelete } from '../actions/data';
import { uiOpenModal } from '../actions/ui';
import { ModalProv } from './ModalProv';

export const Proveedores = () => {

    // Estado para manejar la busqueda
    const [search, setSearch] = useState('');

    // Estado para manejar la paginacion 
    const [currentPage, setCurrentPage] = useState(0);

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    });

    // Filtra a los proveedores por letra
    const filtrarProveedor = () => {

        if( search.length === 0 ) 
            return body.slice(currentPage, currentPage + 5);

        // Si hay algo en la caja de texto
        const filtered = body.filter( b => b.nombre.includes( search ) );
        return filtered.slice( currentPage, currentPage + 5);
    }

    const nextPage = () => {
        if ( body.filter( b => b.nombre.includes( search ) ).length > currentPage + 5 )
            setCurrentPage( currentPage + 5 );
    }

    const prevPage = () => {
        if ( currentPage > 0 )
            setCurrentPage( currentPage - 5 );
    }

    const onSearchChange = ({ target }) => {
        setCurrentPage(0);
        setSearch( target.value );
    }

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
                value={ search }
                onChange={ onSearchChange }
            />

            <hr />  

            <button 
                className="btn btn-primary"
                onClick={ prevPage }
            >
                Anteriores
            </button>
            &nbsp;
            <button 
                className="btn btn-primary"
                onClick={ nextPage }
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
                    {filtrarProveedor && filtrarProveedor().map( b=>                
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
