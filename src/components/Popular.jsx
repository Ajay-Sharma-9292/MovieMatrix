import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading ";
import InfiniteScroll from "react-infinite-scroll-component";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";

const Popular = () => {
  document.title = "MovieMatrix | Popular";

  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
      if (data.results.length > 0) {
        setpopular((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      GetPopular();
    } else {
      setpage(1);
      setpopular([]);
      GetPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <>
      <div className="w-full relative text-white ">
        <div className="w-full absolute bg-[#1F1E24] px-5 flex items-center justify-center ">
          <h1 className="text-2xl flex gap-2 font-semibold text-zinc-300">
            <i
              onClick={() => navigate(-1)}
              className="hover:text-[#6556CD] text-2xl ri-arrow-left-line"
            ></i>
            Popular <small className="text-sm flex items-center mt-2 text-zinc-600 ">
              ({category})
            </small>
          </h1>
          <TopNav />
          <Dropdown
            title="Category"
            options={["tv", "movie"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>

        <InfiniteScroll
          dataLength={popular.length}
          next={GetPopular}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
        >
          <Cards data={popular} title={category} />
        </InfiniteScroll>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Popular;
