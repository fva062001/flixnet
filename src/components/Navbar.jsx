import React, {useEffect, useState, useRef} from "react";
import flixnetLogo from "/public/images/flixnetLogo.png";
import flixnetUserIcon from "/public/images/specific/netflixUserIcon.webp";
import flixnetLogoResponsive from "/public/flixnetLogo.png";
import {IoMdSearch} from "react-icons/io";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {BsSearch} from "react-icons/bs";

function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef();
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

  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = searchInputRef.current.value;
    setShowSearch(false);
    navigate(`/search/${inputValue}`);
  };

  return (
    <div
      className={`text-white top-0 z-30 lg:h-20 xl:h-20 h-24 w-full fixed flex flex-row justify-between ${
        isScrolled === true
          ? "bg-gradient-to-b from-black via-black-opacity-20 to-[#141414]"
          : "bg-gradient-to-b from-black via-black-opacity-20 to-transparent"
      }`}>
      <div className="flex flex-row  lg:mx-16 xl:mx-16 w-full justify-between mx-6 my-auto">
        <div className="my-auto">
          <Link to={"/"}>
            <img
              className="hidden lg:inline xl:inline h-12"
              src={flixnetLogo}
              alt=""
            />
          </Link>
          <Link to={"/"}>
            <img
              className="inline lg:hidden xl:hidden h-16"
              src={flixnetLogoResponsive}
              alt=""
            />
          </Link>
        </div>
        <div className="flex flex-row lg:space-x-8 xl:space-x-8 space-x-4 my-auto">
          {!showSearch && (
            <IoMdSearch
              onClick={() => setShowSearch(true)}
              className="text-2xl my-auto"
            />
          )}
          {showSearch && (
            <form onSubmit={handleSearch} className="my-auto">
              <div class="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  class="block w-full py-3 px-10 my-auto text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-[#db202c]"
                  placeholder="Search show"
                />
                <button
                  type="submit"
                  class="text-white absolute right-2.5 bottom-2.5 bg-blue-700focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 bg-[#db202c] hover:bg-[#eb2735] focus:ring-blue-800">
                  <BsSearch />
                </button>
              </div>
            </form>
          )}
          <img
            className="rounded-lg lg:h-12 xl:h-12 h-16"
            src={flixnetUserIcon}
            alt="UserIcon"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
