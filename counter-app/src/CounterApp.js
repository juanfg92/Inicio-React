import React, { useState } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

const CounterApp = ({ value = 27 }) => {
  const [counter, setCounter] = useState(value);

  //event
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(value);
  };
  const restar = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1> CounterApp </h1> <h2> {counter} </h2>{" "}
      <button onClick={handleAdd}> +1 </button>{" "}
      <button onClick={reset}> Reset </button>{" "}
      <button onClick={restar}> -1 </button>{" "}
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;

//rafcp  ->  generar componente
