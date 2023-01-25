import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifsArray, setGifsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async (state) => {
    const newImages = await getGifs(category);
    setGifsArray(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();

    // getGifs(category).then((newImages) => setGifsArray(newImages));
    // console.log("Gifs padre > ", gifsArray);
  }, []);

  return {
    gifsArray,
    isLoading,
    // gifsArray: gifsArray,
    // isLoading: isLoading,
  };
};
