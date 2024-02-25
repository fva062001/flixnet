import axios from 'axios';

export const fecthTopRatedMovies = async () => {
  return await axios
    .request({
      method: 'GET',
      url: `${process.env.API_URL}movie/top_rated?language=en-US&page=1`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    })
    .then((data) => {
      return data;
    });
};

export const fetchTrendingMovies = async () => {
  return await axios
    .request({
      method: 'GET',
      url: `${process.env.API_URL}trending/movie/week?language=en-US`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    })
    .then((data) => {
      return data;
    });
};
