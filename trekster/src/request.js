const API_KEY = "1d862ca275501a5384739e5cc1d65459";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`, //ending of url and we are adding/inserting apikey
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_network=213`, //with will give specific details addition
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;