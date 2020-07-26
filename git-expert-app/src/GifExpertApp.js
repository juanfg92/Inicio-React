import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
// import PropTypes from "prop-types";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  // const addCategory = () => {
  //   // setCategories([...categories, "Categoria añadida"]); //añadir elemento a array
  //   setCategories((categ) => [...categ, "Categoria Nueva"]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

GifExpertApp.propTypes = {};

export default GifExpertApp;
