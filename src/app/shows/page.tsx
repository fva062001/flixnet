'use client';
import React, { useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import ShowList from '../../components/common/ShowList';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SearchPage() {
  const router = useRouter();

  const [page, setPage] = useState(1);

  const previousPage = () => {
    setPage((prevState) => prevState - 1);
  };

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <Suspense>
      <div className="mt-28 lg:mx-16 mx-6 2xl:mx-auto">
        <ShowListComponent
          nextPage={nextPage}
          previousPage={previousPage}
          page={page}
        />
      </div>
    </Suspense>
  );
}

function ShowListComponent({ nextPage, previousPage, page }: any) {
  const searchParams = useSearchParams();
  const searchParam = searchParams.get('query');

  return (
    <ShowList
      title={'Shows found'}
      query={`https://www.episodate.com/api/search?q=${searchParam}&page=${page}`}
      nextPage={nextPage}
      previousPage={previousPage}
    />
  );
}

export default SearchPage;
