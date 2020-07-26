export const getGifts = async (category) => {
  const api_key = "qd8FWZc51FunHsduVM86YEXcY9bprsPC";
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&api_key=${api_key}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
