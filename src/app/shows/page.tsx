'use client';
import React, { useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import ShowList from '@/components/ShowList';

function SearchPage() {
  const router = useRouter();
  const { searchParam } = router.query;
  const [page, setPage] = useState(1);

  const previousPage = () => {
    setPage((prevState) => prevState - 1);
  };

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <div className="mt-28 lg:mx-16 mx-6 2xl:mx-auto">
      <ShowList
        title={'Shows found'}
        query={`https://www.episodate.com/api/search?q=${searchParam}&page=${page}`}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </div>
  );
}

export default SearchPage;
