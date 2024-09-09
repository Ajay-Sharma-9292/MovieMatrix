import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading ";
import InfiniteScroll from "react-infinite-scroll-component";

const TvShows = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");
  const [tvshow, settvshow] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  document.title = "MovieMatrix | TvShows";

  const GetTvshow = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      if (data.results.length > 0) {
        settvshow((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const refreshHandler = () => {
    if (tvshow.length === 0) {
      GetTvshow();
    } else {
      setpage(1);
      settvshow([]);
      GetTvshow();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return tvshow.length > 0 ? (
    <>
      <div className="w-full relative text-white ">
        <div className="w-full absolute bg-[#1F1E24] px-5 flex items-center justify-center ">
          <h1 className="text-2xl w-[30%] flex gap-2 font-semibold text-zinc-300">
            <i
              onClick={() => navigate(-1)}
              className="hover:text-[#6556CD] text-2xl ri-arrow-left-line"
            ></i>
            Tv Shows
            <small className="text-sm flex items-center mt-2 text-zinc-600 ">
              ({category})
            </small>
          </h1>
          <TopNav />
          <Dropdown
            title="Category"
            options={["on_the_air", "popular", "top_rated", "airing_today"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>

        <InfiniteScroll
          dataLength={tvshow.length}
          next={GetTvshow}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
        >
          <Cards data={tvshow} title="tv" />
        </InfiniteScroll>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default TvShows;
