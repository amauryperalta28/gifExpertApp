import PropTypes from "prop-types";
import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GridGifItem } from "./GridGifItem";

export const GifGrid = ({ category }) => {
  // const [images, setimages] = useState([]);
  const {data:images, loading} = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      <hr/>
      {loading && <p className="animate__animated animate__flash">Cargando...</p>}
      <div className="card-grid">
        {images.map((image) => (
          <GridGifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
