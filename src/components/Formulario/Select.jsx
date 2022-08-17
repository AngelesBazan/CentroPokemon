import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { FormContext } from '../../context/ContextoFormulario';
import { obtenerPokemones } from '../../helpers/pokemones';

const Select = ({name, label, accion}) => {

  const { data, isLoading, isError } = useQuery("Obtener pokemones", obtenerPokemones);

  const {dispatch} = useContext(FormContext);
  const [ valor, setValor ] = useState("");

  const onChange = (e) => {
    setValor(e.target.value);
  };

  const onBlur = (e) => {
    e.preventDefault();
    dispatch({type: accion, payload: {clave:name, valor: valor}})
  };

  return (
    <div className='input-contenedor'>
        <label htmlFor={name}>{label}</label>
        <select
          name={name}
          id={name}
          onBlur={onBlur}
          onChange={onChange}
          disabled={ isLoading || isError }
        >
            {data?.results.map((tipo) => {
                return <option key={tipo.name} value={tipo.name}>{tipo.name}</option>
            })}
        </select>
    </div>
  )
}

export default Select