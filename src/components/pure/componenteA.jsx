import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ComponenteB from './componenteB';

const ComponenteA = () => {
const contacto = new Contacto('Michael','Ovallez','michaelovallez@gmail.com',false);
    return (
        <div>
            <ComponenteB contacto={ contacto }></ComponenteB>
        </div>
    );
}

export default ComponenteA;

