import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading ";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  document.title = "MovieMatrix | Trending";

  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      if (data.results.length > 0) {
        settrending((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const refreshHandler = () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setpage(1);
      settrending([]);
      GetTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <>
      <div className="w-full relative text-white ">
        <div  className="w-full absolute bg-[#1F1E24] px-5 flex items-center justify-center ">
          <h1 className="text-2xl flex gap-2 font-semibold text-zinc-300">
            <i
              onClick={() => navigate(-1)}
              className="hover:text-[#6556CD] text-2xl ri-arrow-left-line"
            ></i>
            Trending <small className="text-sm flex items-center mt-2 text-zinc-600 ">
              ({category})
            </small>
          </h1>
          <TopNav />
          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>

        <InfiniteScroll
          dataLength={trending.length}
          next={GetTrending}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
        >
          <Cards data={trending} title={category} />
        </InfiniteScroll>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Trending;
