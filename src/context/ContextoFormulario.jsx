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
        switch(action.type) {
            case ACTUALIZAR_ENTRENADOR:
                return {
                    ...state, entrenador: {...state.entrenador, [action.payload.clave]: action.payload.valor}
                    
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

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    )

}

export default FormContextProvider;