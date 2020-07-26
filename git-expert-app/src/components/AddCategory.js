import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState("");

  const addCategory = (e) => {
    setinputValue(e.target.value);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((categ) => [inputValue, ...categ]);
      setinputValue("");
    }
  };

  return (
    <>
      <h2>Add Category</h2>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={addCategory} value={inputValue} />

        <button onClick={onsubmit}>Add Category</button>
      </form>
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
