'use client';
import React, { useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
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
        <h1>Working on it</h1>
      </div>
    </Suspense>
  );
}


export default SearchPage;
