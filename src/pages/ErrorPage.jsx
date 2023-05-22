import React from "react";
import errorPageBackground from "/public/images/specific/errorPageBg.jpeg";
import {useNavigate} from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div
      className="w-[100vw] bg-center bg-cover mt-16 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) , url(${errorPageBackground})`,
        minHeight: "calc(100vh - 4rem)",
      }}>
      <div className="absolute text-center space-y-6 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
        <h1 className="text-white font-extrabold lg:text-6xl xl:text-6xl md:text-6xl text-4xl drop-shadow-2xl">
          Where you going?
        </h1>
        <p className="text-white font-light text-xl lg:w-6/12 xl:w-6/12 w-12/12 mx-auto">
          We do not find this page on our servers, on our home page you will
          find all our titles
        </p>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="text-black bg-white hover:bg-opacity-50 font-semibold text-xl px-6 py-2 rounded-lg">
          Go to home
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
