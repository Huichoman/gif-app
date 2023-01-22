import { useEffect, useState } from "react";

export const GifGrid = ({ category }) => {
  const [gifsArray, setGifsArray] = useState([]);

  const apiKey = "rnY4RhqwuO7FUe1Fl9Q93dzyTKOqZ337";
  const endPoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=25&offset=0&rating=g&lang=en`;

  const getGifs = async () => {
    const response = await fetch(endPoint);
    const { data } = await response.json();
    const gifs = data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      image: gif.images.fixed_height_downsampled.url,
    }));

    // console.log(data);
    setGifsArray(gifs);
    console.log("gifs > ", gifs);
  };

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <>
      <h1>{category}</h1>
      {gifsArray.map(({ id, title, image }) => (
        <div key={id}>
          <h2>{title}</h2>
          <img src={image} />
        </div>
      ))}
    </>
  );
};
