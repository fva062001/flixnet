import React from "react";
import backgroundImage from "/public/images/landingBackground.jpg";
import bgResponsiveImage from "/public/images/landingResponsiveBg.jpeg";
import vikingsLogo from "/public/images/specific/vikingsLogo.png";
import {IoIosPlay, IoMdInformationCircleOutline} from "react-icons/io";
import useMediaQuery from "use-media-query-hook";

function Header() {
  const isMobile = useMediaQuery("(max-width: 425px)");

  if (isMobile) {
    return (
      <>
        <div
          className="relative z-10 mx-auto mt-16 rounded-2xl border-[0.1px]  border-[#49524f]"
          style={{
            width: "90vw",
            height: "60vh",
            background: `linear-gradient(to top, rgba(18, 20, 20, 1) 0%, rgba(20, 20, 20, 0.5) 80%, rgba(0, 0, 0, 0) 100%), url(${bgResponsiveImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="bottom-4 absolute left-1/2 -translate-x-1/2 w-full">
            <h2 className="text-white font-extralight text-xl text-center">
              <span className=" font-semibold">FLIXNET</span> ORIGINAL
            </h2>
            <img
              className="w-48 mx-auto mb-6"
              src={vikingsLogo}
              alt="VikingsLogo"
            />
            <div className="flex flex-row justify-around   ">
              <button className="w-5/12 text-black bg-white hover:bg-opacity-50 font-semibold text-xl  py-2 rounded-lg">
                <IoIosPlay className="inline" /> Play
              </button>
              <button className="w-5/12 bg-[#4f4f50] bg-opacity-50 hover:bg-opacity-50 font-semibold  text-white text-xl  py-2 rounded-lg">
                <IoMdInformationCircleOutline className="inline" /> More Info
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
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
