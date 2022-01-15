import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [category, setcategory] = useState('');

  const handleChange = (e) => {
    setcategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories((categories) => {
      return [category, ...categories, ];
    });

    setcategory("");
  };

  AddCategory.propTypes = {
      setCategories: PropTypes.func.isRequired
  }

  return (
    <form onSubmit={handleSubmit}>

      <input type="text" value={category} onChange={handleChange} />
      <hr />
    </form>
  );
};
