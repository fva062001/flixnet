import React from 'react';
import Header from '../common/Header';
import Card from '../common/Card';
import { useFetchTrendingMovies } from '@/utils/api-hooks';
import { Movie } from '@/types/movie-type';
import { Carousel } from '@mantine/carousel';

function LandingPage() {
  const { data: movies, isLoading: loadingMovies } = useFetchTrendingMovies();
  return (
    <>
      <Header />
      <div className="-pt-82">
        <Carousel
          className="px-10"
          height={200}
          loop
          align={'start'}
          withControls
          slideSize={{ base: '100%', sm: '33.333333%', md: '20%', lg: '20%' }}
          slideGap={{ base: 0, sm: 'md', md: 'lg', lg: 'lg' }}>
          {movies?.data.results.map((movie: Movie, index: number) => {
            return (
              <Carousel.Slide key={index}>
                <Card
                  movie={movie}
                  key={index}
                />
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default LandingPage;
