import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import Select from "./Select";
import { ACTUALIZAR_ENTRENADOR, ACTUALIZAR_POKEMON } from "../../context/actions";

const Formulario = () => {
  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokemon de Ash</h2>
        </div>
        <Link className="volver" to="/">
          Home
        </Link>
      </header>
      <div className="formulario-ingreso">
        <h3>Solicitud de atención</h3>
        <p>
          Por favor, completa el formulario para que podamos atender a tu
          pokémon
        </p>
        <div className="cuerpo-formulario">
          <div className="inputs">
            <div>
              <p className="nombre-seccion">
                <img src={entrenador} alt="entrenador" />
                <span>ENTRENADOR</span>
              </p>
              <Input name="nombre" label="Nombre" accion={ACTUALIZAR_ENTRENADOR}/>
              <Input name="apellido" label="Apellido" accion={ACTUALIZAR_ENTRENADOR}/>
              <Input name="email" label="Email" type="email" accion={ACTUALIZAR_ENTRENADOR}/>
            </div>
            <div>
              <p className="nombre-seccion">
                <img src={pikachu} alt="pikachu" />
                <span>POKEMON</span>
              </p>
              <Input name="nombrePokemon" label="Nombre" accion={ACTUALIZAR_POKEMON}/>
              {/* <Input name="tipo" label="Tipo" accion={ACTUALIZAR_POKEMON}/> */}
              <Select name="tipo" label="Tipo" accion={ACTUALIZAR_POKEMON} />
              <Input name="elemento" label="Elemento" accion={ACTUALIZAR_POKEMON}/>
              <Input name="altura" label="Altura" accion={ACTUALIZAR_POKEMON}/>
              <Input name="edad" label="Edad" accion={ACTUALIZAR_POKEMON}/>
            </div>
          </div>
          <Detalle />
        </div>
      </div>
    </>
  );
};

export default Formulario;
