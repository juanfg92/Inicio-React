import React from "react";
import PropTypes from "prop-types";

//a los props se les puede poner valor por defecto
const PrimeraApp = ({ saludoProps, subtitulo }) => {
  const saludo = "Hola como estan?";
  const persona = {
    nombre: "Juan",
    apellido: "Fernandez",
  };

  console.log(saludoProps);
  return (
    <>
      <h1>prop: {saludoProps}</h1>
      <h1> {saludo} </h1>
      <p> Mi primera aplicación </p>
      <h1> Objeto: </h1>
      <pre>{JSON.stringify(persona, null, 3)}</pre>
      <p>Nombre: {persona.nombre}</p>
      <p> Apellido: {persona.apellido}</p>
      <h1>Subtitulo {subtitulo}</h1>
    </>
  );
};

//validación de proptypes recibidos entre componentes: controlar
//tipo de dato, requerido, etc...
PrimeraApp.propTypes = {
  saludoProps: PropTypes.string.isRequired,
};

//valores por defecto de props
PrimeraApp.defaultProps = {
  subtitulo: "Hola soy un subtitulo",
};

export default PrimeraApp;
