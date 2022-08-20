import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ComponenteB = ({ contacto }) => {
    return (
        <div>
             <h2>
                Nombre y Apellido: { contacto.nombre } { contacto.apellido }
            </h2>
            <h4>
                Email: { contacto.email }
            </h4>
            <h5>
                Estado de conexion: { contacto.conectado ? 'Contacto en Linea':'Contacto no Disponible' }
            </h5>
        </div>
    );
};


ComponenteB.propTypes = {
    contacto : PropTypes.instanceOf(Contacto)
};


export default ComponenteB;