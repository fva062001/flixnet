import React, {useState} from "react";
import useSWR from "swr";
import ShowCard from "./ShowCard";
import {MdPlayArrow} from "react-icons/md";
import {CiWarning} from "react-icons/ci";
import ShowLoadingList from "./ShowLoadingList";
import {useNavigate} from "react-router-dom";

function ShowList({title, query, previousPage, nextPage}) {
  const navigate = useNavigate();
  const [shows, setShows] = useState(null);
  const [pages, setPages] = useState(1);
  const {data, isLoading} = useSWR(query, (url) =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPages(data.pages);
        setShows(data.tv_shows);
      })
  );

  const handleShowClick = (e) => {
    navigate(`/show/${e}`);
  };

  const handlePrevious = () => {
    previousPage();
  };

  const handleNext = () => {
    nextPage();
  };

  if (isLoading) {
    return <ShowLoadingList />;
  }

  return (
    <div className="relative z-20 w-fit">
      <h1 className="text-[#e5e5e5] mb-2 text-xl">{title}</h1>
      <div className=" grid lg:grid-cols-7 2xl:grid-cols-8  md:grid-cols-4 grid-cols-3 gap-3 lg:gap-6 2xl:gap-8 w-fit">
        {shows !== null &&
          shows.map((show) => {
            if (show.image_thumbnail_path === "https://static.episodate.com") {
              return (
                <div
                  onClick={() => {
                    navigate(`/show/${show.id}`);
                  }}
                  id={show.id}
                  key={show.id}
                  className="bg-[#727272] h-full w-full rounded-md relative">
                  <div className="w-full text-base text-center text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                    <CiWarning className="mx-auto" />
                    <h1 className="font-bold">No image found</h1>
                    <p>Show Title</p>
                    <p>{show.name}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <ShowCard
                  id={show.id}
                  onClick={handleShowClick}
                  key={show.id}
                  background={show.image_thumbnail_path}
                  title={show.name}
                />
              );
            }
          })}
      </div>
      {pages > 1 && (
        <div className="w-full my-10 text-center space-x-10 text-2xl">
          <button
            className="p-2 hover:bg-white text-white hover:text-black font-bold rotate-180 rounded-xl border-[1px]"
            onClick={handlePrevious}>
            <MdPlayArrow />
          </button>
          <button
            className="p-2 rounded-xl hover:bg-white hover:text-black  border-[1px] text-white font-bold"
            onClick={handleNext}>
            <MdPlayArrow />
          </button>
        </div>
      )}
    </div>
  );
}

export default ShowList;
