export const getGifs = async (category) => {
  const apiKey = "rnY4RhqwuO7FUe1Fl9Q93dzyTKOqZ337";
  const endPoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5&offset=0&rating=g&lang=en`;
  const response = await fetch(endPoint);
  const { data } = await response.json();
  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    image: gif.images.fixed_height_downsampled.url,
  }));

  console.log("Gifs hijo > ", gifs);

  return gifs;
};
