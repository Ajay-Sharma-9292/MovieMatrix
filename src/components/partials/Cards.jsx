import React from "react";
import { Link } from "react-router-dom";
import noimage from "/NoImage.jpeg";

const Cards = ({ data, title }) => {
  return (
    <>
      <div className="w-full h-full bg-[#1F1E24]  flex flex-wrap pl-[4%] pt-24">
        {data.map((c, i) => (
          <Link
            to={`/${c.media_type || title}/details/${c.id}`}
            className="relative w-[25vh] mr-5 mb-5 "
            key={i}
          >
            <img
              className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded h-[35vh] object-cover "
              src={
                c.poster_path || c.backdrop_path || c.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      c.poster_path || c.backdrop_path || c.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <h1 className="font-medium mt-2 p-1 ">
              {" "}
              {c.name || c.title || c.orignal_name || c.orignal_title}
            </h1>

            {c.vote_average && (
              <div className=" absolute right-[-3%] bottom-[25%] rounded-full text-lg font-semibold bg-yellow-600 w-[5vh] h-[5vh] flex justify-center items-center ">
                {(c.vote_average * 10).toFixed()}
                <sup>%</sup>
              </div>
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Cards;
