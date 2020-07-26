import React /* { useState, useEffect }*/ from "react";
// import PropTypes from "prop-types";
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  //con : renombramos variable
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__backInLeft">{category}</h3>
      {loading && <p>Cargando...</p>}
      <div className="card-grid">
        {
          /* {images.map(({id, title}) => (
          <li key={id}>{title}</li>
        ))} */
          //si una funcion se pone con parentesis, estas diciendo que tiene
          //un return implicito.
          images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))
        }
      </div>
    </>
  );
};

GifGrid.propTypes = {};

export default GifGrid;
