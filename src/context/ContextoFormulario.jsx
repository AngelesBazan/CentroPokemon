// Aqui debemos crear nuestro contexto y nuestro provider.
import { createContext, useReducer } from "react";
import { ACTUALIZAR_ENTRENADOR, ACTUALIZAR_POKEMON } from "./actions";

export const FormContext = createContext();

const FormContextProvider = ({children}) => {
    
    //const [user, setUser] = useState({});
    const initialState = {
        entrenador:{
            nombre:"",
            apellido:"",
            email:""
        },
        pokemon:{
            nombrePokemon:"",
            tipo:"",
            elemento:"",
            altura:0.0,
            edad:0
        }
    }

    const reducer = (state, action) => {
        switch(action.type) { // porque sería el payload y entra a la propiedad type (es buena práctica pero podría llamarse "maria :v")
            case ACTUALIZAR_ENTRENADOR: // Un caso para cada acción
                return { // state porque es el que va por parámetro
                    ...state, entrenador: {...state.entrenador, [action.payload.clave]: action.payload.valor} // del payload voy a extraer "clave" y "valor"
                    
                    // equivale a = setUser({...user, [clave]: valor});
                }

            case ACTUALIZAR_POKEMON:
                return {
                    ...state, pokemon: {...state.pokemon, [action.payload.clave]: action.payload.valor}
                }
                
            default:
                console.log("No se puede realizar tal acción.");
        }
    }

    /* const agregarUsuario = (clave, valor) => {
        setUser({...user, [clave]: valor});
        //const temporal = user;
        //temporal.push(user);
        //setUser(temporal);
    }; */


    const [state, dispatch] = useReducer(reducer, initialState);
    // esto lo voy a disponibilizar en el provider para que sea accesible en todo el contexto
    // state es initialState y dispatch es la función reducer que tiene el switch

    return(
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    )

}

export default FormContextProvider;
    
/* const eliminarUsuario = (id) => {
    const restoDeUsuarios = user.filter(
        user => user.id !== id
    );
    setUser(restoDeUsuarios);
}; */