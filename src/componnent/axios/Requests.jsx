const API_KEY = '3f1c84ef0e9ef75d40bd7b4725160b8c';

const Requests = {
    img :'http://image.tmdb.org/t/p/original',
    fetchTrending : `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`
};


export default Requests;