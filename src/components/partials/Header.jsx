import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
//   console.log(data);
  return (
    <>
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.profile_path
          })`,
          backgroundPosition: "",
          backgroundSize: "cover",
        }}
        className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%] text-white "
      >
        <h1 className="mb-3 w-[60%] font-black text-5xl ">
          {data.name || data.title || data.orignal_name || data.orignal_title}
        </h1>
        <p className="w-[60%] text-xs ">
          {data.overview.slice(0, 200)}...
          <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">More</Link>
        </p>
        <p className="mt-2">
          <i className="text-yellow-500 ri-megaphone-fill"></i>{data.release_date || "No Information" }
          <i className="ml-5 text-yellow-500 ri-disc-fill"></i>{data.media_type.toUpperCase()}
        </p>
        <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="bg-[#6556CD] p-2 rounded font-medium mt-3">Watch Trailer</Link>
      </div>
    </>
  );
};

export default Header;
