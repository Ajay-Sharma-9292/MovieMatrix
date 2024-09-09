import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading ";
import InfiniteScroll from "react-infinite-scroll-component";

const Movie = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [movie, setmovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  document.title = "MovieMatrix | Movie";

  const GetMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setmovie((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const refreshHandler = () => {
    if (movie.length === 0) {
      GetMovie();
    } else {
      setpage(1);
      setmovie([]);
      GetMovie();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return movie.length > 0 ? (
    <>
      <div className="w-full relative text-white ">
        <div className="w-full absolute bg-[#1F1E24] px-5 flex items-center justify-center ">
          <h1 className="text-2xl flex gap-2 font-semibold text-zinc-300">
            <i
              onClick={() => navigate(-1)}
              className="hover:text-[#6556CD] text-2xl ri-arrow-left-line"
            ></i>{" "}
            Movies
            <small className="text-sm flex items-center mt-2 text-zinc-600 ">
              ({category})
            </small>
          </h1>
          <TopNav />
          <Dropdown
            title="Category"
            options={["popular", "top_rated", "upcoming", "now_playing"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>

        <InfiniteScroll
          dataLength={movie.length}
          next={GetMovie}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
        >
          <Cards data={movie} title="movie" />
        </InfiniteScroll>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Movie;
