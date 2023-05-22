import React from "react";
import LoadingCard from "./LoadingCard";

function ShowLoadingList() {
  return (
    <div className="relative z-20 lg:mt-[-15vh] xl:mt-[-15vh] md:mt-[-15vh] mt-4 w-fit lg:mx-16 mx-6 2xl:mx-auto">
      <h1 className="text-[#e5e5e5] mb-2 text-xl">All the shows</h1>
      <div className=" grid lg:grid-cols-7 2xl:grid-cols-8  md:grid-cols-4 grid-cols-3 gap-3 lg:gap-6 2xl:gap-8 w-fit">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    </div>
  );
}

export default ShowLoadingList;
