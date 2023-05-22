import React, {useEffect, useState} from "react";
import flixnetLogo from "/public/images/flixnetLogo.png";
import flixnetUserIcon from "/public/images/specific/netflixUserIcon.webp";
import {IoMdSearch} from "react-icons/io";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`text-white top-0 z-30 h-16 w-full py-4 fixed flex flex-row justify-between ${
        isScrolled === true
          ? "bg-gradient-to-b from-black via-black-opacity-20 to-[#141414]"
          : "bg-gradient-to-b from-black via-black-opacity-20 to-transparent"
      }`}>
      <div className="flex flex-row space-x-10 mx-16">
        <img className="w-20" src={flixnetLogo} alt="" />
        <p className="my-auto font-light">Inicio</p>
      </div>
      <div className="flex flex-row space-x-8 mx-16">
        <IoMdSearch className="text-2xl my-auto" />
        <img className="rounded-lg" src={flixnetUserIcon} alt="UserIcon" />
      </div>
    </div>
  );
}

export default Navbar;
