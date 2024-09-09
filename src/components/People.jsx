import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading ";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  const [people, setpeople] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  document.title = "MovieMatrix | People";

  const GetPeople = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setpeople((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const refreshHandler = () => {
    if (people.length === 0) {
      GetPeople();
    } else {
      setpage(1);
      setpeople([]);
      GetPeople();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return people.length > 0 ? (
    <>
      <div className="w-full relative text-white ">
        <div className="w-full absolute bg-[#1F1E24] px-5 flex items-center justify-center ">
          <h1 className="text-2xl w-[30%] flex gap-2 font-semibold text-zinc-300">
            <i
              onClick={() => navigate(-1)}
              className="hover:text-[#6556CD] text-2xl ri-arrow-left-line"
            ></i>
            People
          </h1>
          <TopNav />
        </div>

        <InfiniteScroll
          dataLength={people.length}
          next={GetPeople}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
        >
          <Cards data={people} title="person" />
        </InfiniteScroll>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default People;
