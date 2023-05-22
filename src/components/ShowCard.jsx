import React from "react";

function ShowCard({background, title}) {
  return (
    <div className="hover:scale-[1.2] hover:duration-[1s]  hover:ease-out ">
      <img
        className="lg:max-h-64 lg:max-w-48 lg:h-64 w-44 rounded-md"
        src={background}
        alt={`Movie: ${title}`}
      />
    </div>
  );
}

export default ShowCard;
