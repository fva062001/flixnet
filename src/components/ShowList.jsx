import React, {useState} from "react";
import useSWR from "swr";
import ShowCard from "./ShowCard";

function ShowList() {
  const [shows, setShows] = useState(null);
  const [page, setPage] = useState(1);
  const {data, isLoading} = useSWR(
    `https://www.episodate.com/api/most-popular?page=${page}`,
    (url) =>
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setShows(data.tv_shows);
        })
  );

  const previousPage = () => {
    setPage((prevState) => prevState - 1);
  };

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="relative z-20 lg:mt-[-15vh] xl:mt-[-15vh] md:mt-[-15vh] mt-10 w-fit mx-16">
      <h1 className="text-[#e5e5e5] mb-2 text-xl">All the shows</h1>
      <div className=" grid lg:grid-cols-7 2xl:grid-cols-10 md:grid-cols-4 grid-cols-3 gap-3 lg:gap-6 2xl:gap-8 w-fit">
        {shows !== null &&
          shows.map((show) => {
            return (
              <ShowCard
                key={show.id}
                background={show.image_thumbnail_path}
                title={show.name}
              />
            );
          })}
      </div>
      <div>
        <button className="p-4 text-white font-bold" onClick={previousPage}>
          {"<"}
        </button>
        <button className="p-4 text-white font-bold" onClick={nextPage}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default ShowList;
