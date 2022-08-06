import React, { useContext, useState } from "react";
import { FormContext } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text", accion }) => {
  const {dispatch} = useContext(FormContext);
  //const {agregarUsuario} = useContext(FormContext);

  const [ valor, setValor ] = useState("");

  const onChange = (e) => {
    setValor(e.target.value);
  };

  const onBlur = (e) => {
    e.preventDefault();
    dispatch({type: accion, payload: {clave:name, valor: valor}})
    // dispatch es la función reducer que tiene el switch, recibe 2 parámetros: type y payload
    // el tipo de acción está en lo que le mandé por props
    // el payload está compuesto de clave y valor

    // Le paso por parámetro clave: valor
    // agregarUsuario(name, valor);
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={valor}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
