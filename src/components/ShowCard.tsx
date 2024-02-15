import React from 'react';

type ShowCardProps = {
  background: string;
  title: string;
  onClick: (id: number) => void;
  id: number;
};

function ShowCard({ background, title, onClick, id }: ShowCardProps) {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <div
      onClick={handleClick}
      className="hover:scale-[1.2] hover:duration-[1s]  hover:ease-out ">
      <img
        className="lg:max-h-64 lg:max-w-48 lg:h-64 w-44 rounded-md"
        src={background}
        alt={`Movie: ${title}`}
      />
    </div>
  );
}

export default ShowCard;
