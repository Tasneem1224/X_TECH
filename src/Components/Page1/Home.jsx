import React from "react";
import { Link } from "react-router-dom";

import Logo from "./logo.png";
import Image from "./image.png";
import bg from "./bg.jpg";

function Home() {
  return (
    <>
      <div
        className="flex flex-col items-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <img
          src={Logo}
          alt="Logo"
          className="w-[353px] h-[108px] relative top-[110px]"
        />

        <h2 className="font-sora text-[36px] font-semibold leading-[44px] relative top-[160px] ">
          You have been disconnected
        </h2>

        <p className="font-sora text-[28px] font-semibold leading-[36px] relative top-[200px] text-custom-gray ">
          The page has expired!
        </p>

        <Link to="/login">
          <button className="font-sora w-[144px] h-[44px] text-[18px] relative top-[250px] bg-blue-500 text-white rounded-lg ">
            Sign in
          </button>
        </Link>

        <br />
        <img
          src={Image}
          alt=""
          className="w-[709px] h-[450px] relative top-[250px]"
        />
      </div>
    </>
  );
}

export default Home;
