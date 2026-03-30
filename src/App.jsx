import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Formulario from './Formulario.jsx'
import Cita from './Cita.jsx'

function App(){
  return(
    <>
      <Formulario />
        <Cita />
    </>
  )
}
export default App;