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
    <div className="relative z-20 mt-[-15vh] w-fit mx-12">
      <h1 className="text-[#e5e5e5] mb-2 text-xl">All the shows</h1>
      <div className=" grid grid-cols-7 gap-6 w-fit">
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
