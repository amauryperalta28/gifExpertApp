const apiKey = "6DpMCusWJGaViRh3DpmW9gLjevURRjD0";

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
    const response = await fetch(url);
    const { data } = await response.json();
    const images = data.map((image) => {
      return {
        url: image?.images.downsized_medium.url,
        title: image.title,
        id: image.id,
      };
    });
     
    return images;

  };