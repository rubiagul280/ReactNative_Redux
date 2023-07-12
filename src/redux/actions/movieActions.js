/* eslint-disable prettier/prettier */
import axios from 'axios';

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMovies = () => {
  return (dispatch) => {
    axios
      .get('https://reactnative.dev/movies.json')
      .then((response) => {
        const movieData = response.data.movies.map((movie) => ({
          title: movie.title,
          releaseYear: movie.releaseYear,
        }));
        dispatch(fetchMoviesSuccess(movieData));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
