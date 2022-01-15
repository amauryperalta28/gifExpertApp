import { useEffect, useState } from "react";
import { getGifs } from "../services/imageService";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({ data: [], loading: true });

  useEffect(() => {
    getGifs(category).then((images) =>
      setstate({
        data: images,
        loading: false,
      })
    );
  }, [category]);

  return state;
};
