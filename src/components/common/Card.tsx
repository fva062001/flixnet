import React from 'react';
import { Movie } from '@/types/movie-type';

type CardProps = {
  movie: Movie;
};

const Card = ({ movie }: CardProps) => {
  console.log(movie);
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
        style={{ width: '100%', height: 'auto' }}
      />
      {/* <h2>{movie.title}</h2>
      <p>{movie.overview}</p> */}
    </div>
  );
};

export default Card;
