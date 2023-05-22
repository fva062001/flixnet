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
      <h1 className="text-white mt-20">{show.name}</h1>
    </>
  );
}

export default ShowDetail;
