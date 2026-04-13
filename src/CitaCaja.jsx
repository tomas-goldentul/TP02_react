import './CitaCaja.css'

const CitaCaja = ({ cita }) => {
    const { mascota, dueno, fecha, hora, sintomas } = cita
    const [eliminar, setEliminar] = useState(false)

    if(!eliminar)
            {
    return (
    <>
        
        <div className="cita">
            <p>Mascota: <span>{mascota}</span></p>
            <p>Dueño: <span>{dueno}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Síntomas: <span>{sintomas}</span></p>
            <button onclick={() => setEliminar(true)} className="eliminar">Eliminar ×</button>
        </div>
    
    </>
    );
}else{
    return(
        <></>
        
    )
}
};

export default CitaCaja;