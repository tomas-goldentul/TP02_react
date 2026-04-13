const CamposFormulario = ({ label, name, type, placeholder, value, onChange }) => {
  return (
    <div className="campo">
      <label>{label}</label>

      {name === "sintomas" && (
        <textarea 
          name={name} 
          className="u-full-width"
          value={value}
          onChange={onChange}
        />
      )}

      {name !== "sintomas" && (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="u-full-width"
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default CamposFormulario;