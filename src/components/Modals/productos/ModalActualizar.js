import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import { agregar } from '../../../actions/data';
import { uiCloseModal } from '../../../actions/ui'

// import Swal from 'sweetalert2';

// Centramos el modal 
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  // Este es el root del index
  Modal.setAppElement('#root');

  const initEvent = {
    nombre: '',
    precio: '',
    stock: '',
    ID: '',
    proveedor: ''
  }

export const ModalActualizar = () => { 

    const [formValues, setFormValues] = useState(initEvent);

    const [nombreValid, setNombreValid] = useState( true );

    const dispatch = useDispatch();

    const { modalOpen } = useSelector( state => state.ui );

    // Exraemos las propiedas del state
    const { nombre, precio, stock, ID, proveedor } = formValues;

    // Cambiamos los campos del input
    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [ target.name ]: target.value
        });

    }

    // Capturamos los valores del formulario
    const handleSubmitForm = ( e ) => {

        e.preventDefault();

        if( nombre.trim().length < 2) {
            return setNombreValid( false );
        }

        dispatch( agregar({
            ...formValues
        }))
        
        setNombreValid( true );
        closeModal();
    }

    const closeModal = () => {
        dispatch( uiCloseModal() );   
        setFormValues( initEvent );
    }

    return (
        <Modal
        isOpen={ modalOpen }
        onRequestClose={closeModal}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={ 200 }
        >
        <h1> Actualizar producto</h1>

        <hr />

        <form 
            className="container"
            onSubmit={ handleSubmitForm }
        >

            <div className="form-group">
                <label>ID</label>
                <input 
                    className={`form-control ${ !nombreValid && 'is-invalid' }`} 
                    placeholder="Café..." 
                    autoComplete="off"
                    name="nombre"
                    value={ nombre }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <label>Nombre del producto</label>
                <input 
                    className={`form-control ${ !nombreValid && 'is-invalid' }`} 
                    placeholder="Café..." 
                    autoComplete="off"
                    name="nombre"
                    value={ nombre }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <label>Precio del producto</label>
                <input 
                    className={`form-control ${ !nombreValid && 'is-invalid' }`} 
                    placeholder="100"
                    autoComplete="off"
                    name="precio"
                    value={ precio }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <label>Cantidad a ingresar</label>
                <input 
                    className={`form-control ${ !nombreValid && 'is-invalid' }`}  
                    placeholder="100" 
                    autoComplete="off"
                    name="stock"
                    value={ stock }
                    onChange={ handleInputChange }
                />
            </div>
            <hr/>
            <div className="form-group">
                <label>Ingrese su ID</label>
                <input 
                    className={`form-control ${ !nombreValid && 'is-invalid' }`}  
                    placeholder="1"
                    autoComplete="off"
                    name="ID"
                    value={ ID }
                    onChange={ handleInputChange }
                />
            </div>
            <hr/>
            <div className="form-group">
                <label>Ingrese el ID del proveedor</label>
                <input 
                    className={`form-control ${ !nombreValid && 'is-invalid' }`}  
                    placeholder="1"
                    autoComplete="off"
                    name="proveedor"
                    value={ proveedor } 
                    onChange={ handleInputChange }
                />
            </div>
            
            <hr/>

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>

        </form>

        </Modal>
    )
}
