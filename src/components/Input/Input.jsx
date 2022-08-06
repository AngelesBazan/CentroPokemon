import React, { useContext, useState } from "react";
import { FormContext } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text", accion }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.
  
  const {dispatch} = useContext(FormContext);
  //const {agregarUsuario} = useContext(FormContext);

  // También, utilizaremos un estado local para manejar el estado del input.
  const [ valor, setValor ] = useState("");

  const onChange = (e) => {
    // Aquí deberíamos actualizar el estado local del input.
    setValor(e.target.value);
    // console.log(valor);
  };

  const onBlur = (e) => {
    e.preventDefault();
    // Aqui deberíamos actualizar el estado global con los datos de cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
    
    // Acá traigo el tipo de acción ("accion") por props para indicarle cuál se va ejecutar
    // y armo un despacho genérico
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
