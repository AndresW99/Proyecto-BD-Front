import React from 'react';
import { Modals } from '../components/Modal';

export const CoffeScreen = () => {


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

        <table className="table">
            <thead>
                <tr>
                    <th style={{ width: 100 }}>ID</th>
                    <th style={{ width: 150 }}>Nombre</th>
                    <th style={{ width: 150 }}>Precio</th>
                    <th style={{ width: 150 }}>Proveedor</th>
                    <th style={{ width: 150 }}>Disponible</th>
                </tr>
            </thead>
            <tbody>
                {
                    
                    <tr>
                        <td>1</td>
                        <td>Café</td>
                        <td>Q.100</td>
                        <td>Nescafe</td>
                        <td>Si</td>
                    </tr>
              
                }
            </tbody>
        </table>

        <Modals />
    </div>
    )
}
