import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Notfound from "../Notfound";

const Trailer = () => {
  document.title = "MovieMatrix | Trailer" ;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);

  return (
    <>
      <div className="absolute bg-[rgba(0,0,0,.9)] z-[100] top-0 left-0 flex items-center justify-center w-full h-screen">
        <Link
          onClick={() => navigate(-1)}
          className="absolute hover:text-[#6556CD] right-[5%] top-[5%] text-4xl font-semibold ri-close-large-line"
        ></Link>
        {ytvideo ? (
          <ReactPlayer
            controls
            height={600}
            width={1000}
            url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
            
          />
        ) : (
          <Notfound />
        )}
      </div>
    </>
  );
};

export default Trailer;
