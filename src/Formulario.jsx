import './Formulario.css'
import TituloFormulario from './TituloFormulario.jsx'
import CamposFormulario from './CamposFormulario.jsx'

const campos = [
  { label: "Nombre Mascota", name: "mascota", type: "text", placeholder: "Nombre Mascota" },
  { label: "Nombre Dueño", name: "propietario", type: "text", placeholder: "Nombre dueño de la mascota" },
  { label: "Fecha", name: "fecha", type: "date" },
  { label: "Hora", name: "hora", type: "time" },
  { label: "Síntomas", name: "sintomas" } 
];

function Formulario() {
  return (
    <div class="formulario">
      <form>
        <TituloFormulario />
        
        {campos.map((campo) => (
          <CamposFormulario 
            key={campo.name} 
            label={campo.label}
            name={campo.name}
            type={campo.type}
            placeholder={campo.placeholder}
          />
        ))}

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}

export default Formulario;