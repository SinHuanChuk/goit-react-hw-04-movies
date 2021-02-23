import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = 'e98e77c903068e3cdf69e15d92c890ac';

export function fetchTrendingMovies() {
  return axios.get(`${baseUrl}/trending/movie/day?api_key=${apiKey}`);
}

export function fetchMoviesByQuery(query) {
  return axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`);
}

export function fetchMovieDetails(movieId) {
  return axios.get(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`);
}

export function fetchReviewsDetails(movieId) {
  return axios.get(`${baseUrl}/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`)
}

export function fetchCastDetails(movieId) {
  return axios.get(`${baseUrl}/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`)
}