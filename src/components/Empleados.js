import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { empStartLoading } from '../actions/data';

export const Empleados = () => {

    const dispatch = useDispatch();
    const { body } = useSelector( state => state.emp );

    useEffect(() => {
        
        dispatch( empStartLoading() );

    }, [ dispatch ]);

    return (
        <div className="mt-5">
                
            <h1>Listado de empleados</h1>
            <hr/>

            <input 
                type="text"
                className="mb-2 form-control"
                placeholder="Buscar..."
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
            >
                Agregar
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
                    {body && body.map( b =>        
                        <tr key={ b.id }>
                            <td>{ b.id }</td>
                            <td>{ b.nombre }</td>
                            <td>{ b.correo }</td>
                            <td>{ b.rol }</td>
                            <td>
                                <button className="btn btn-info btn-sm">Editar</button>
                                &nbsp;
                                <button className="btn btn-danger btn-sm">Eliminar</button>
                            </td>
                        </tr>
                
                    )}
                </tbody>
            </table>

            
        </div>
    )
}
