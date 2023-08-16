import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'

function App() {

   const [mascota, setMascotaSeleccionada] = useState({
    mascota: {},
    valid: false
  })

  return (
    <>
      <Form setMascotaSeleccionada={setMascotaSeleccionada}/>
      {mascota.valid && <Card mascota={mascota.mascota}/>}
    </>
  )
}

export default App
