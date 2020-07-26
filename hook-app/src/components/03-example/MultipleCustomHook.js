import React from "react";
import { useFecth } from "../../hooks/useFecth";
import { useCounter } from "../../hooks/useCounter";
// import PropTypes from "prop-types";

import "../02-useEffect/effects.css";

const MultipleCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(1);

  const { loading, data } = useFecth(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>Breaking Bad</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0"> {quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button onClick={increment} className="btn btn-primary">
        Next
      </button>
    </div>
  );
};

MultipleCustomHook.propTypes = {};

export default MultipleCustomHook;
