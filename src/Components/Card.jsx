import React from 'react'

const Card = ({mascota: mascota}) => {
  return (
    <div className='tarjeta' style={{justifyContent: 'center'}}><br/>
        <h2>Datos Mascota:</h2>
        <h3>{mascota.nombre}</h3>
        <h4>{mascota.raza}</h4>   
    </div>
  )
}

export default Card