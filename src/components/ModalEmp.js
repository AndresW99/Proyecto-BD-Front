import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import { uiCloseModal } from '../actions/ui';

import { clearEmp, empStartUpdate } from '../actions/empleados';


// Centramos el modal 
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      paddingTop            : '100px',
    }
};

  // Este es el root del index
  Modal.setAppElement('#root');

  const initEvent = {
    nombre: '',
    correo: '',
    contrasenia: '',
  }


export const ModalEmp = () => { 

    const dispatch = useDispatch();

    // Seleccionamos el modal del state
    const { modalOpen } = useSelector( state => state.ui );
    const { active } = useSelector( state => state.emp);

    const [nombreValid, setNombreValid] = useState( true );

    const [formValues, setFormValues] = useState(initEvent);

    // Exraemos las propiedas del state
    const { nombre, correo, contrasenia } = formValues;

    useEffect(() => {

        if( active ) {
            setFormValues( active );
        }

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

        // Si el evento esta activo actualiza, si no agrega producto
        if( active ) {
            dispatch( empStartUpdate( formValues ) )
        }

        setNombreValid( true );
        closeModal();
    }

    // Cerramos el modal
    const closeModal = () => {
        dispatch( uiCloseModal() );   
        dispatch( clearEmp() );
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
        <h1>Actualizar usuario</h1>
        <hr />
        <form 
            className="container"
            onSubmit={ handleSubmitForm }
        >

            <div className="form-group">
                <label>Nombre usuario</label>
                <input 
                    className={`form-control ${ !nombreValid && 'is-invalid' }`} 
                    placeholder="Selitec..." 
                    autoComplete="off"
                    name="nombre"
                    value={ nombre }
                    onChange={ handleInputChange }
                />
            </div>
            <hr/>

            <div className="form-group">
                <label>Nombre usuario</label>
                <input 
                    className={`form-control ${ !nombreValid && 'is-invalid' }`} 
                    placeholder="Selitec..." 
                    autoComplete="off"
                    name="correo"
                    value={ correo }
                    onChange={ handleInputChange }
                />
            </div>

            <hr />

            <div className="form-group">
                <label>Nombre usuario</label>
                <input 
                    className={`form-control ${ !nombreValid && 'is-invalid' }`} 
                    placeholder="Contraseña" 
                    autoComplete="off"
                    name="contrasenia"
                    value={ contrasenia }
                    onChange={ handleInputChange }
                />
            </div>

            <hr />

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
