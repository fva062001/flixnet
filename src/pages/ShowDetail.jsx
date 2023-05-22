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
    <div className=" mt-28 lg:mx-16 mx-6 2xl:mx-auto">
      <h1 className="text-white">{show.name}</h1>
    </div>
  );
}

export default ShowDetail;
