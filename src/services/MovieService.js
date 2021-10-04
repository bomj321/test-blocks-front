import axios from 'axios';
import environment from '../libs/environment';

export default {
  getMovies: (number = 1, size = 20) =>
    axios({
      method: 'GET',
      url: `${environment.baseUrl}/movies/public?page=${number}&pageSize=${size}`,
    }),

  getMoviesLikedByMe: (number = 1, size = 20) =>
    axios({
      method: 'GET',
      url: `${environment.baseUrl}/movies/public/liked-by-me/?page=${number}&pageSize=${size}`,
    }),

  getMovie: (id) =>
    axios({
      method: 'GET',
      url: `${environment.baseUrl}/movies/${id}`,
    }),

  likeMovie: (id) =>
    axios({
      method: 'PUT',
      url: `${environment.baseUrl}/movies/like/${id}`,
    }),
};
