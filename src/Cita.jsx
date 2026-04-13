import './Cita.css'
import CitaCaja from "./CitaCaja";
const Cita = ({ citas }) => {
  return (
    <div className="lista-citas">
      <h1 className="titulo">Administra tus Citas</h1>
      {citas.map((cita) => (
        <CitaCaja
          key={cita.mascota}
          cita={cita}
        />
      ))}
    </div>
  );
};

export default Cita;