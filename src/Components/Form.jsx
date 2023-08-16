import React from 'react'
import { useState } from 'react'

const Form = ({setMascotaSeleccionada}) => {

    const [mascota, setMascota] = useState({
        nombre: '',
        raza: ''
    })
    const [enviado, setEnviado] = useState(false)
    const [error, setError] = useState(false)
    
    const handleSubmit = () => {
        if(mascota.nombre.length > 3 && !(mascota.nombre[0] == " ") && mascota.raza.length > 5) {
            setEnviado(true)            
            setError(false)
            setMascotaSeleccionada( {
                mascota: mascota,
                valid: true})
        } else {
            setEnviado(false)
            setError(true)
            setMascotaSeleccionada( {
                mascota: mascota,
                valid: false})
        }
    }

  return (
    <div style={{justifyContent: 'center', justifyItems: 'center'}}>   
        <div>
            <label className='label'>Nombre de la mascota: </label><br/>
            <input type="text" onChange={(event) => setMascota({...mascota, nombre: event.target.value})}/>
        </div><br/>     
        <div>
            <label className='label'>Raza: </label><br/>
            <input type="text" onChange={(event) => setMascota({...mascota, raza: event.target.value})}/>
        </div><br/>
        <button className='boton' onClick={handleSubmit}>Enviar</button>        
        {error && <h3 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h3>}
    </div>
  )
}

export default Form