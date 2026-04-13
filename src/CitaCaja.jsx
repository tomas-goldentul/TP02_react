import './CitaCaja.css'
import { useState } from "react";

const CitaCaja = ({ cita }) => {
  if (!cita) return null;

  const { mascota, dueno, fecha, hora, sintomas } = cita;
  const [eliminar, setEliminar] = useState(false);

  const handleEliminar = () => {
    if (window.confirm("¿Estás seguro?")) {
      setEliminar(true);
    }
  };

  if (eliminar) return null;

  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{dueno}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Síntomas: <span>{sintomas}</span></p>
      <button onClick={handleEliminar} className="eliminar">Eliminar ×</button>
    </div>
  );
};

export default CitaCaja;
