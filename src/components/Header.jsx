import React from "react";
import backgroundImage from "/public/images/landingBackground.jpg";
import Navbar from "./Navbar";
import vikingsLogo from "/public/images/specific/vikingsLogo.png";
import {IoIosPlay, IoMdInformationCircleOutline} from "react-icons/io";

function Header() {
  return (
    <>
      <Navbar />
      <div
        className="relative z-10"
        style={{
          width: "100vw",
          height: "100vh",
          background: `linear-gradient(to top, rgba(20, 20, 20, 1) 0%, rgba(20, 20, 20, 0.5) 80%, rgba(0, 0, 0, 0) 100%), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}>
        <div className="mx-16 h-full">
          <div className="absolute top-1/2 -translate-y-1/2 space-y-4">
            <h2 className="text-white font-extralight text-2xl">
              <span className=" font-semibold">FLIXNET</span> ORIGINAL
            </h2>
            <img className="w-64" src={vikingsLogo} alt="VikingsLogo" />
            <p className="text-white font-extralight text-base w-6/12">
              This realistic drama recounts the exploits of the Viking Ragnar
              Lothbrok during the Norse expansion by challenging a visionless
              leader.
            </p>
            <div className="flex flex-row space-x-2">
              <button className="text-black bg-white hover:bg-opacity-50 font-semibold text-xl px-6 py-2 rounded-lg">
                <IoIosPlay className="inline" /> Play
              </button>
              <button className="bg-[#4f4f50] bg-opacity-70 hover:bg-opacity-50 font-semibold  text-white text-xl px-6 py-2 rounded-lg">
                <IoMdInformationCircleOutline className="inline" /> More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
