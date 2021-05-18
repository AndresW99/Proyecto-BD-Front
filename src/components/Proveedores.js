import React from 'react';

export const Proveedores = () => {

    

    return (
        <div className="mt-5">
            
        <h1>Listado de proveedores</h1>
        <hr/>

        <input 
            type="text"
            className="mb-2 form-control"
            placeholder="Buscar..."
        />

        <hr />

        <table className="table">
            <thead>
                <tr>
                    <th style={{ width: 100 }}>ID</th>
                    <th style={{ width: 150 }}>Nombre</th>
                    <th style={{ width: 150 }}>Disponible</th>
                </tr>
            </thead>
            <tbody>
                {
                    
                    <tr>
                        <td>1</td>
                        <td>Nescafe</td>
                        <td>No</td>
                    </tr>
              
                }
            </tbody>
        </table>
    </div>
    )
}
