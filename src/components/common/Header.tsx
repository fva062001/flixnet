'use client';
import React from 'react';
import { useEffect } from 'react';
import backgroundImage from '/public/images/landingBackground.jpg';
import bgResponsiveImage from '/public/images/landingResponsiveBg.jpeg';
import vikingsLogo from '/public/images/specific/vikingsLogo.png';
import { IoIosPlay, IoMdInformationCircleOutline } from 'react-icons/io';
import { useFetchTrendingMovies } from '@/utils/api-hooks';

function Header() {
  const { data: movies, isLoading: loadingMovies } = useFetchTrendingMovies();
  console.log(movies?.data.results);
  const randomMovie =
    movies?.data.results[
      Math.floor(Math.random() * movies?.data.results.length)
    ];

  if (loadingMovies) return <div>Loading...</div>;

  return (
    <>
      <div
        className="relative z-10 hidden lg:inline-block"
        style={{
          width: '100vw',
          height: '100vh',
          background: `linear-gradient(to top, rgba(20, 20, 20, 1) 0%, rgba(20, 20, 20, 0.3) 80%, rgba(0, 0, 0, 0) 100%), url(https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}) no-repeat center`,
          backgroundSize: 'cover',
        }}>
        <div className="px-16 h-full">
          <div className="absolute top-1/2 -translate-y-1/2 space-y-8">
            <h2 className="text-white font-extralight text-4xl">
              <span className="font-semibold">FLIXNET</span> ORIGINAL
            </h2>
            <h1 className="font-bold text-white text-8xl h-100">
              {randomMovie.title}
            </h1>

            <p className="text-white font-extralight text-2xl w-5/12">
              {randomMovie.overview.slice(0, 200)}...
            </p>
            <div className="flex flex-row space-x-8">
              <button className="text-black bg-white hover:bg-opacity-50 font-semibold text-4xl px-10 py-4 rounded-lg">
                <IoIosPlay className="inline" /> Play
              </button>
              <button className="bg-[#4f4f50] bg-opacity-70 hover:bg-opacity-50 font-semibold  text-white text-4xl px-10 py-4 rounded-lg">
                <IoMdInformationCircleOutline className="inline" /> More Info
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative z-10 mx-auto mt-24 rounded-lg border-[0.1px]  border-[#49524f] lg:hidden"
        style={{
          width: '90vw',
          height: '55vh',
          background: `linear-gradient(to top, rgba(18, 20, 20, 1) 0%, rgba(20, 20, 20, 0.5) 80%, rgba(0, 0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}) no-repeat center center`,
          backgroundSize: 'cover',
        }}>
        <div className="bottom-4 absolute left-1/2 -translate-x-1/2 w-full text-center">
          <h2 className="text-white font-extralight text-xl text-center">
            <span className=" font-semibold">FLIXNET</span> ORIGINAL
          </h2>
          <h1 className="font-bold text-white text-2xl h-100">
            {randomMovie.title}
          </h1>
          <p className="text-[#b2b7ca] mb-4 mx-auto text-center font-extralight text-sm w-10/12">
            Drama ⦁ Action ⦁ Violence
          </p>
          <div className="flex flex-row justify-around   ">
            <button className="w-5/12 text-black bg-white hover:bg-opacity-50 font-semibold text-lg  py-1 rounded-sm">
              <IoIosPlay className="inline" /> Play
            </button>
            <button className="w-5/12 bg-[#4f4f50] bg-opacity-50 hover:bg-opacity-50 font-semibold  text-white text-lg  py-1 rounded-sm">
              <IoMdInformationCircleOutline className="inline" /> More Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
