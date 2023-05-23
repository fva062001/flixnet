import React, {useState} from "react";
import useSWR from "swr";
import {useParams} from "react-router-dom";
function ShowDetail() {
  const params = useParams();
  const [show, setShow] = useState(null);
  const {data, isLoading} = useSWR(
    `https://www.episodate.com/api/show-details?q=${params.showId}`,
    (url) =>
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setShow(data.tvShow);
        })
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {show !== null && (
        <div
          className="flex lg:flex-row xl:flex-row md:flex-col-reverse flex-col-reverse lg:mx-16 xl:mx-16 md:mx-12 mx-6 mt-24 lg:mt-20"
          style={{minHeight: "calc(100vh - 4rem)"}}>
          <div className="text-center md:text-center lg:text-left xl:text-left lg:w-6/12 xl:w-6/12 w-12/12 relative">
            <div
              className="p-6 lg:absolute xl:absolute lg:left-1/2
            xl:left-1/2 lg:-translate-x-1/2 xl:-translate-x-1/2 lg:top-1/2 xl:top-1/2  lg:-translate-y-1/2 xl:-translate-y-1/2  lg:border-[1px] xl:border-[1px] rounded-lg">
              <h2 className="text-white font-extralight text-2xl mb-4">
                <span className=" font-semibold">FLIXNET</span> ORIGINAL
              </h2>
              <h1 className="text-white font-bold text-4xl mb-2">
                {show.name}
              </h1>
              <div className="justify-center md:justify-center lg:justify-start xl:justify-start flex-row flex text-white space-x-4">
                <p className="my-auto">
                  {show.start_date === null
                    ? "NA"
                    : show.start_date.split("-")[0]}
                </p>
                <p className=" border-[1px] font-bold border-white rounded-lg">
                  HD
                </p>
                <p className="border-[1px] font-bold border-white rounded-lg">
                  {(+show.rating).toFixed(1)}
                </p>
              </div>
              <p className="text-white mt-4 text-sm">{show.description}</p>
            </div>
          </div>
          <div className="lg:w-6/12 xl:w-6/12 md:8/12 w-12/12 relative">
            <img
              className="lg:w-8/12 xl:w-8/12 md:w-10/12 w-10/12 h-6/12 rounded-2xl lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 border-[2px] mx-auto"
              src={
                show.image_thumbnail_path === "https://static.episodate.com"
                  ? "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                  : show.image_thumbnail_path
              }
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ShowDetail;
