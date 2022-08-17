import React from 'react';
import { useQuery } from 'react-query/types/react';
import { obtenerPokemones } from '../../helpers/pokemones';

const Grilla = () => {

    const { data, isLoading, error } = useQuery("Obtener pokemones", obtenerPokemones);
    /*
    
    const { data, isLoading, error , isIdle, refetch } = useQuery("Obtener pokemones", obtenerPokemones, {
    enabled:false, staleTime:2000, refetchOnWindowFocus: false }); // esto deshabilita que se haga el fetch de los datos apenas se carga el componente
    
    if(isIdle){
        return <button onClick={ refetch }> Hacer petición </button>
    }

    // isIdle = is inactivo
    // refetch = hace la petición
    // staleTime:2000 = (tiempo obsoleto) para que arranque a los 2 segundos
    // revisar documentación oficial

    */

  return (
    <div>
        
        

    </div>
  )
}

export default Grilla