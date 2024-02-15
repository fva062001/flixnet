'use client';
import React, { useState } from 'react';
import ShowList from '../components/ShowList';
import Header from '../components/Header';

function LandingPage() {
  const [page, setPage] = useState(1);

  const previousPage = () => {
    setPage((prevState) => prevState - 1);
  };

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      <Header />
      <div className="lg:mt-[-15vh] xl:mt-[-15vh] md:mt-[-15vh] mt-4 lg:mx-16 mx-6 2xl:mx-auto">
        <ShowList
          title={'All the shows'}
          query={`https://www.episodate.com/api/most-popular?page=${page}`}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </div>
    </>
  );
}

export default LandingPage;
