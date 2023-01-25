import { useEffect, useState } from "react";
import { GifCard } from "../GifCard";
import { getGifs } from "../../helpers/getGifs";
import { useFetchGifs } from "../../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { gifsArray, isLoading } = useFetchGifs(category);

  // const [gifsArray, setGifsArray] = useState([]);

  // const getImages = async (state) => {
  //   const newImages = await getGifs(category);

  //   setGifsArray(newImages);
  // };

  // useEffect(() => {
  //   getImages();

  //   // getGifs(category).then((newImages) => setGifsArray(newImages));
  //   // console.log("Gifs padre > ", gifsArray);
  // }, []);

  return (
    <>
      <h1>{category}</h1>
      {isLoading && <h2>Loading...</h2>}
      {gifsArray.map((gifData) => (
        <GifCard key={gifData.id} {...gifData} />
      ))}
    </>
  );
};
