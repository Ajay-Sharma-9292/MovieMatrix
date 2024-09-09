import React from "react";
import { Link } from "react-router-dom";
import noimage from "/NoImage.jpeg";

const HorizontalCards = ({ data }) => {
  return (
    <>
      <div className="cards flex w-[100%] overflow-y-hidden mb-5 p-5 ">
        {data.length > 0 ? (
          data.map((d, i) => (
            <Link
              to={`/${d.media_type}/details/${d.id}`}
              key={i}
              className="min-w-[15%] h-[32vh] bg-zinc-900 mr-5 mb-5 "
            >
              <img
                className="w-full h-[45%] object-cover "
                src={
                  d.backdrop_path || d.profile_path || d.poster_path
                    ? `https://image.tmdb.org/t/p/original/${
                        d.backdrop_path || d.profile_path || d.poster_path
                      })`
                    : noimage
                }
                alt=""
              />
              <div className="text-white p-3 h-[55%] flex flex-col gap-2 overflow-y-auto ">
                <h1 className=" font-semibold text-lg leading-5 ">
                  {d.name || d.title || d.orignal_name || d.orignal_title}
                </h1>
                <p className="text-xs  ">
                  {d.overview.slice(0, 50)}...
                  <span className="text-zinc-500">More</span>
                </p>
              </div>
            </Link>
          ))
        ) : (
          <h1 className="text-5xl mt-5 font-black text-center text-white ">
            Nothing to Show
          </h1>
        )}
      </div>
    </>
  );
};

export default HorizontalCards;
