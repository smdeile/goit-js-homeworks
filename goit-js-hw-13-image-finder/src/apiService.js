const getImages = async function(url) {
  const objFromApi = await fetch(url);
  const response = await objFromApi.json();
  const data = await response.hits;

  return data;
};
export default getImages;
