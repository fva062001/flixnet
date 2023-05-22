import React, {useEffect, useState} from "react";
import flixnetLogo from "/public/images/flixnetLogo.png";
import flixnetUserIcon from "/public/images/specific/netflixUserIcon.webp";
import flixnetLogoResponsive from "/public/flixnetLogo.png";
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
      className={`text-white top-0 z-30 lg:h-20 xl:h-20 h-18 w-full fixed flex flex-row justify-between ${
        isScrolled === true
          ? "bg-gradient-to-b from-black via-black-opacity-20 to-[#141414]"
          : "bg-gradient-to-b from-black via-black-opacity-20 to-transparent"
      }`}>
      <div className="flex flex-row  lg:mx-16 xl:mx-16 w-full h-12 justify-between mx-6 my-auto">
        <div className="my-auto">
          <img
            className="hidden lg:inline xl:inline h-12"
            src={flixnetLogo}
            alt=""
          />
          <img
            className="inline lg:hidden xl:hidden h-8"
            src={flixnetLogoResponsive}
            alt=""
          />
        </div>
        <div className="flex flex-row lg:space-x-8 xl:space-x-8 space-x-4 my-auto">
          <IoMdSearch className="text-2xl my-auto" />
          <img
            className="rounded-lg lg:h-12 xl:h-12 h-8"
            src={flixnetUserIcon}
            alt="UserIcon"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
