import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Contacto } from './Contacto.class'

const ComponenteB = ({contacto}) => {
    const [estado,setEstado] = useState(contacto.Conectado);
    const cambiar =()=>{
        setEstado(!estado)
    }
  return (
    <div>
    <h2>Nombre: {contacto.Nombre}</h2>
    <h2>Apellido: {contacto.Apellido}</h2>
    <h2>Email: {contacto.Email}</h2>
    <h2>Estado: {estado?'Contacto En Línea':'Contacto No Disponible'}</h2>
    <button onClick={cambiar}>cambiar estado</button>      
    </div>
  ) 
}

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ComponenteB
