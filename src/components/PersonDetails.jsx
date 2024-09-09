import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import HorizontalCards from "../components/partials/HorizontalCards";
import Loading from "../components/Loading ";
import Dropdown from "./partials/Dropdown";

const PersonDetails = () => {
  const [category, setcategory] = useState("movie");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();

  // console.log(info);

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <>
      <div className="relative w-full h-[200vh] px-[5%] pr-[5%] bg-[#1F1E24] text-white">
        {/* Part 1 Navigation */}

        <nav className="w-full h-[10vh] flex gap-10 text-2xl font-medium items-center ">
          <Link
            to={"/"}
            className="hover:text-[#6556CD] text-3xl ri-home-4-fill"
          ></Link>
          <Link
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] text-3xl ri-arrow-left-line"
          ></Link>
        </nav>

        <div className="w-full flex gap-10">
          {/* Part 2 Left Poster and details */}

          <div className="w-[25%] mt-5">
            <img
              className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded h-[40vh] object-cover "
              src={`https://image.tmdb.org/t/p/original/${info.details.profile_path}`}
              alt=""
            />
            <hr className=" w-[70%] mt-5 mb-2" />

            {/* Social media Links */}

            <div className="flex gap-5 text-2xl  ">
              <a
                className="hover:text-[#6556CD]"
                target="_blank"
                href={`https://www.wikidata.org/wiki/${info.externalids.wikidata_id}`}
              >
                <i className="ri-earth-fill"></i>
              </a>
              <a
                className="hover:text-blue-600 "
                target="_blank"
                href={`https://www.facebook.com/${info.externalids.facebook_id}`}
              >
                <i className="ri-facebook-box-fill"></i>
              </a>
              <a
                className="hover:text-[#FD0AB4]"
                target="_blank"
                href={`https://www.instagram.com//${info.externalids.instagram_id}`}
              >
                <i className="ri-instagram-fill"></i>
              </a>
              <a
                className="hover:text-blue-300"
                target="_blank"
                href={`https://x.com/${info.externalids.twitter_id}`}
              >
                <i className="ri-twitter-x-fill"></i>
              </a>
            </div>

            {/* Personal information */}
            <h1 className=" font-semibold text-zinc-100 text-2xl my-3 ">
              Personal info
            </h1>
            <h1 className=" font-medium text-lg text-zinc-300 ">Known For </h1>
            <h1 className=" text-zinc-400 ">
              {info.details.known_for_department}
            </h1>
            <h1 className=" font-medium text-lg text-zinc-300 mt-3 ">Gender</h1>
            <h1 className=" text-zinc-300 ">
              {info.details.gender === 2 ? "male" : "Female"}
            </h1>
            <h1 className=" font-medium text-lg text-zinc-300 mt-3 ">
              Date of Birth
            </h1>
            <h1 className=" text-zinc-400 ">{info.details.birthday}</h1>
            <h1 className=" font-medium text-lg text-zinc-300 mt-3 ">
              Place of Birth
            </h1>
            <h1 className=" text-zinc-400 ">{info.details.place_of_birth}</h1>
            <h1 className=" font-medium text-lg text-zinc-300 mt-3 ">
              Date of Death
            </h1>
            <h1 className=" text-zinc-400 ">
              {info.details.deathday ? info.details.deathday : "Zinda hai Bro"}
            </h1>
            <h1 className=" font-medium text-lg text-zinc-300 mt-3 ">
              Also Known As :
            </h1>
            <h1 className=" text-zinc-400 ">
              {info.details.also_known_as.join(", ")}
            </h1>
          </div>

          {/* Part 3 Right details and information */}

          <div className="w-[75%] ">
            <h1 className=" font-black text-6xl my-3 ">{info.details.name}</h1>
            <h1 className=" mt-3 font-medium text-lg text-zinc-200 ">
              Biography :
            </h1>
            <h1 className=" text-zinc-400 text-sm ">
              {info.details.biography}
            </h1>
            <h1 className=" mt-5 font-medium text-lg text-zinc-200 ">
              Known for :
            </h1>
            <HorizontalCards data={info.combinedcredits.cast} />
            <div className="w-full flex justify-between ">
              <h1 className=" mt-2 font-medium text-lg text-zinc-200 ">
                Acting :
              </h1>
              <Dropdown
                title="category"
                options={["tv", "movie"]}
                func={(e) => setcategory(e.target.value)}
              />
            </div>
            <div className="w-full h-[50vh] overflow-x-hidden overflow-y-auto shadow-xl mt-5 shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-3 ">
              {info[category + "credits"].cast.map((c, i) => (
                <li
                  key={i}
                  className="hover:text-white p-5 rounded hover:bg-[#19191d] duration-300 cursor-pointer "
                >
                  <Link to={`/${category}/details/${c.id}`}>
                    <span>
                      Movie Name :{" "}
                      {c.name || c.title || c.orignal_name || c.orignal_title}
                    </span>
                    <span className="block ml-5 ">
                      {" "}
                      {c.character && `Character Name : ${c.character}`}
                    </span>
                  </Link>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
