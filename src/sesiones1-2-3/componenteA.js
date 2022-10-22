import React from 'react'
import { Contacto } from './Contacto.class';
import ComponenteB from './componenteB';

const ComponenteA = () => {
    const contacto = new Contacto('Juan','Lopez','juan@mail.com',false);
  return (
    <div>
        <ComponenteB contacto={contacto}/>
      
    </div>
  )
}

export default ComponenteA