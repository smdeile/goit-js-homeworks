const baseUrl =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&key=15565961-5e85110a0724a211af2dbcdb2';
export default {
  page: 1,
  query: '',

  fetchArticles() {
    const requestParameters = `&q=${this.query}&page=${this.page}`;
    return fetch(baseUrl + requestParameters)
      .then(response => response.json())
      .then(responseData => {
        this.incrementPage();
        return responseData.hits;
      });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page++;
  },

  resetPage() {
    this.page = 1;
  },
};
