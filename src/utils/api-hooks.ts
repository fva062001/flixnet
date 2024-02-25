import { useQuery } from 'react-query';
import { fecthTopRatedMovies, fetchTrendingMovies } from './requests';

export const useFetchTopRatedMovies = () => {
  return useQuery({
    queryKey: 'fetchTopRatedMovies',
    queryFn: () => fecthTopRatedMovies(),
    keepPreviousData: false,
  });
};

export const useFetchTrendingMovies = () => {
  return useQuery({
    queryKey: 'fetchTrendingMovies',
    queryFn: () => fetchTrendingMovies(),
    keepPreviousData: false,
  });
};
