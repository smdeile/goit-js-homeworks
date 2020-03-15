const getImages = async function(find, page) {
  const base =
    'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';
  const imgPerPage = '&per_page=12';
  const numberOfPage = `&page=${page}`;
  const key = '&key=15565961-5e85110a0724a211af2dbcdb2';
  const url = base + find + numberOfPage + imgPerPage + key;

  const objFromApi = await fetch(url);
  const response = await objFromApi.json();
  const data = await response.hits;

  return data;
};
export default getImages;
