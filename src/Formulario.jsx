import './Formulario.css'
import { useState } from 'react'
import TituloFormulario from './TituloFormulario.jsx'
import CamposFormulario from './CamposFormulario.jsx'

const campos = [
  { label: "Nombre Mascota", name: "mascota", type: "text", placeholder: "Nombre Mascota" },
  { label: "Nombre Dueño", name: "dueno", type: "text", placeholder: "Nombre dueño de la mascota" },
  { label: "Fecha", name: "fecha", type: "date" },
  { label: "Hora", name: "hora", type: "time" },
  { label: "Síntomas", name: "sintomas", type: "text" } 
];

function Formulario({ setCitas }) {

  const [form, setForm] = useState({
    mascota: '',
    dueno: '',
    fecha: '',
    hora: '',
    sintomas: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()


    const nuevaCita = {
      id: Date.now(),
      ...form
    }

    setCitas(prev => [...prev, nuevaCita]) 

    setForm({
      mascota: '',
      dueno: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })
  }

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <TituloFormulario />

        {campos.map((campo) => (
          <CamposFormulario 
            key={campo.name} 
            label={campo.label}
            name={campo.name}
            type={campo.type}
            placeholder={campo.placeholder}
            value={form[campo.name]}
            onChange={handleChange}
          />
        ))}

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  )
}

export default Formulario