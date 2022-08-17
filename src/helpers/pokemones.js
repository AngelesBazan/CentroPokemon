export const obtenerPokemones = async () => {

    try{
        const respuesta = await fetch("https://pokeapi.co/api/v2/type/");
        const data = await respuesta.json();
        return data;

    } catch (error){
        console.warn(error);
    }

}