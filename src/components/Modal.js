import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import { uiCloseModal } from '../actions/ui';
import { agregar, clearEvent, productoActualizado } from '../actions/data';
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

export const Modals = () => { 

    const dispatch = useDispatch();

    // Seleccionamos el modal del state
    const { modalOpen } = useSelector( state => state.ui );
    const { active } = useSelector( state => state.coffe);

    const [nombreValid, setNombreValid] = useState( true );

    const [formValues, setFormValues] = useState(initEvent);

    // Exraemos las propiedas del state
    const { nombre, precio, stock, ID, proveedor } = formValues;

    useEffect(() => {

        if( active ) {
            setFormValues( active );
        }
        console.log(active)
    }, [ active, setFormValues ]);

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

        if( active ) {
            dispatch( productoActualizado( formValues ) )
        }else {
            dispatch( agregar({
                ...formValues,
                proveedor: {
                    id: new Date().getTime(),
                    nombre: "aglo"
                }
            }))
        } 

    


        setNombreValid( true );
        closeModal();
    }

    // Cerramos el modal
    const closeModal = () => {
        dispatch( uiCloseModal() );   
        dispatch( clearEvent() );
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
        <h1> Nuevo producto </h1>
        <hr />
        <form 
            className="container"
            onSubmit={ handleSubmitForm }
        >

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
            <hr/>
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
            <hr/>
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
