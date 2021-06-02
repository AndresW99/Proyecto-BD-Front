import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2';

import { empStartLoading } from '../actions/data';
import { clearEmp, empleadoSeleccionado, empStartDelete } from '../actions/empleados';
import { uiOpenModal } from '../actions/ui';
import { ModalEmp } from './ModalEmp';

export const Empleados = () => {

    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(0);

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    });

    const filtrarEmpleados = () => {

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

    const dispatch = useDispatch();
    const { body } = useSelector( state => state.emp );

    // Hace que la pagina elimine el evento sin recargar
    const [updateTrigger, setUpdateTrigger] = useState({});

    useEffect(() => {
        
        setTimeout(() => {
            dispatch( empStartLoading() );
        }, 300);

    }, [ dispatch, updateTrigger ]);

    // Esto pone el objeto seleccionado en el active del store
    const handleActua = (e) => {

        dispatch( empleadoSeleccionado( e ) );
        dispatch( uiOpenModal() );
    }

    const handleEliminar = async(e) => {

        dispatch( empleadoSeleccionado( e ) );

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
                'El usuario fue eliminado.',
                'success'
                )
                    dispatch( empStartDelete() );
            } else if (
               /* Read more about handling dismissals below */
               result.dismiss === Swal.DismissReason.cancel
            ) {
               swalWithBootstrapButtons.fire(
                 'Cancelado',
                 'El usuario esta a salvo :)',
                 'error'
               )
               dispatch( clearEmp() );
            }
         })

       setUpdateTrigger(Math.random() )

    }


    return (
        <div className="mt-5">
                
            <h1>Listado de empleados</h1>
            <hr/>

            <input 
                type="text"
                className="mb-2 form-control"
                placeholder="Buscar..."
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

            <hr />

            <table className="table table-dark table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th style={{ width: 100 }}>ID</th>
                        <th style={{ width: 150 }}>Nombre</th>
                        <th style={{ width: 150 }}>Correo</th>
                        <th style={{ width: 150 }}>Rol</th>
                        <th style={{ width: 150 }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filtrarEmpleados && filtrarEmpleados().map( b =>        
                        <tr key={ b.id }>
                            <td>{ b.id }</td>
                            <td>{ b.nombre }</td>
                            <td>{ b.correo }</td>
                            <td>{ b.rol }</td>
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
        
        <ModalEmp />
            
        </div>
    )
}
