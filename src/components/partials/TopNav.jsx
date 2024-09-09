import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import NoImage from "/NoImage.jpeg";

const TopNav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <>
      <div className="w-full h-[10vh] relative flex items-center justify-start ml-[10%] ">
        <i className=" text-3xl text-zinc-400 ri-search-line"></i>
        <input
          onChange={(e) => setquery(e.target.value)}
          value={query}
          className="w-[60%] text-zinc-200 mx-10 p-3 text-xl outline-none border-none bg-transparent hover:bg-zinc-900  "
          type="text"
          placeholder="Search anything"
        />
        {query.length > 0 && (
          <i
            onClick={() => setquery("")}
            className="text-3xl text-zinc-400 ri-close-fill"
          ></i>
        )}
        <div className="z-[100] absolute w-[60%] max-h-[50vh] bg-zinc-900  top-[95%] left-[6%] rounded-lg overflow-auto  ">
          {searches.map((s, i) => (
            <Link
              to={`/${s.media_type}/details/${s.id}`}
              key={i}
              className=" hover:bg-zinc-300 duration-300 hover:text-zinc-900 font-semibold text-zinc-300 flex justify-start items-center w-full border-b-[1px] border-zinc-500 px-10 py-3   "
            >
              <img
                className="w-[8vh] h-[8vh] object-cover rounded mr-5 shadow "
                src={
                  s.backdrop_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.profile_path
                      }`
                    : NoImage
                }
                alt=""
              />
              <span>
                {s.name || s.title || s.orignal_name || s.orignal_title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopNav;
