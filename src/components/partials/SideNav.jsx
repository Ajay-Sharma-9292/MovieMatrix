import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  
  return (
    <>
      <div className="w-[20%] h-screen border-r-[1px] border-zinc-500 p-10 ">
        <h1 className="text-2xl text-bold text-white  ">
          <i className=" text-[#6556CD] mr-2 ri-tv-fill  "></i>
          <span>MovieMatrix</span>
        </h1>

        <nav className=" flex flex-col gap-2 text-xl text-zinc-400 ">
          <h1 className="text-white text-semibold text-xl mt-10 mb-5 ">
            New Feeds
          </h1>

          <Link to={"/trending"} className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3 ">
            <i className="mr-[10px] ri-fire-fill"></i> Trending
          </Link>
          <Link to={"/popular"} className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3 ">
            <i className="mr-[10px] ri-bard-fill"></i> Popular
          </Link>
          <Link to={"/movie"} className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3 ">
            <i className="mr-[10px] ri-movie-2-fill"></i> Movies
          </Link>
          <Link to={"/tvshow"} className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3 ">
            <i className="mr-[10px] ri-tv-2-fill"></i> Tv shows
          </Link>
          <Link to={"/person"} className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3 ">
            <i className="mr-[10px] ri-team-fill"></i> People
          </Link>
        </nav>

        <hr className=" border-none h-[1px] bg-zinc-500 my-5 " />

        <nav className=" flex flex-col gap-2 text-xl text-zinc-400 ">
          <h1 className="text-white text-semibold text-xl mt-5 mb-5 ">
            Website Information
          </h1>

          <Link to={"/about"} className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3 ">
          <i className="mr-[10px] ri-information-fill"></i> About
          </Link>
          <Link to={"/contact"} className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3 ">
          <i className="mr-[10px] ri-phone-fill"></i> Contact Us
          </Link>
          
        </nav>

      </div>
    </>
  );
};

export default SideNav;
