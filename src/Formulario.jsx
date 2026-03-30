import './Formulario.css'
const campos = [
  {
    label: "Nombre Mascota",
    name: "mascota",
    type: "text",
    placeholder: "Nombre Mascota"
  },
  {
    label: "Nombre Dueño",
    name: "propietario",
    type: "text",
    placeholder: "Nombre dueño de la mascota"
  },
  {
    label: "Fecha",
    name: "fecha",
    type: "date"
  },
  {
    label: "Hora",
    name: "hora",
    type: "time"
  },
  {
    label: "Síntomas",
    name: "sintomas",
    as: "textarea"
  }
];
function Formulario() {
  return (
    <div className="formulario">
      <form>

        {campos.map((campo) => (
          <div className="campo" key={campo.name}>
            <label>{campo.label}</label>

            {campo.as === "textarea" ? (
              <textarea
                name={campo.name}
              />
            ) : (
              <input
                type={campo.type}
                name={campo.name}
                placeholder={campo.placeholder}
                className="u-full-width"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="u-full-width button-primary"
        >
          Agregar Cita
        </button>

      </form>
    </div>
  );
}

export default Formulario;