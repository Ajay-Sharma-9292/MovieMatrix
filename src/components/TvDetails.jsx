import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import HorizontalCards from "../components/partials/HorizontalCards";
import Loading from "../components/Loading ";

const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();

  // console.log(info);

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);

  return info ? (
    <>
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
          backgroundPosition: "",
          backgroundSize: "cover",
        }}
        className=" relative w-full h-[180vh] px-[5%] pr-[5%] text-white"
      >
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
          <a
            className="hover:text-[#6556CD]"
            target="_blank"
            href={info.details.homepage}
          >
            <i className="ri-external-link-fill"></i>
          </a>
          <a
            className="hover:text-[#6556CD]"
            target="_blank"
            href={`https://www.wikidata.org/wiki/${info.externalids.wikidata_id}`}
          >
            <i className="ri-earth-fill"></i>
          </a>
          <a
            className="hover:text-[#6556CD]"
            target="_blank"
            href={`https://www.imdb.com/title/${info.externalids.imdb_id}`}
          >
            IMDB
          </a>
        </nav>

        {/* Part 2 Poster and Details */}

        <div className="w-full flex mt-5 ">
          <img
            className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded h-[50vh] object-cover "
            src={`https://image.tmdb.org/t/p/original/${
              info.details.poster_path || info.details.backdrop_path
            }`}
            alt=""
          />

          <div className="content ml-[5%] ">
            <h1 className=" font-black  text-5xl  ">
              {info.details.name ||
                info.details.title ||
                info.details.orignal_name ||
                info.details.orignal_title}

              <small className=" font-semibold text-2xl text-zinc-200 ">
                ({info.details.first_air_date.split("-")[0]})
              </small>
            </h1>

            <div className="flex items-center gap-x-4 mt-3 mb-5 text-lg text-zinc-200 ">
              <span className="rounded-full text-lg font-semibold bg-yellow-600 w-[5vh] h-[5vh] flex justify-center items-center ">
                {(info.details.vote_average * 10).toFixed()}
                <sup>%</sup>
              </span>
              <h1 className=" text-white w-[60px] font-semibold text-xl leading-6 ml-[-13px]">
                User Score
              </h1>
              <h1>{info.details.release_date}</h1>
              <h1>{info.details.genres.map((g) => g.name).join(",")}</h1>
              <h1>{info.details.runtime}min</h1>
            </div>
            <h1 className="text-lg font-semibold italic text-zinc-200 ">
              {info.details.tagline}
            </h1>
            <h1 className="text-2xl font-medium mb-1 ">Overview :</h1>
            <p className="text-sm">{info.details.overview}</p>
            <h1 className="text-2xl font-medium mt-3 mb-1 ">tv Translated :</h1>
            <p className="text-sm mb-5">{info.translations.join(", ")}</p>

            <Link
              className="bg-[#6556CD]  hover:bg-[#4d419b] rounded-lg text-lg font-semibold px-6 py-4 "
              to={`${pathname}/trailer`}
            >
              <i className=" mr-2 ri-play-fill"></i>Play Trailer
            </Link>
          </div>
        </div>

        {/* Part 3 Available Platforms */}

        <div className="w-[80%] flex flex-col gap-5 mt-10 font-medium ">
          {/* On platforms */}

          {info.watchproviders && info.watchproviders.flatrate && (
            <div className="flex gap-5 items-center ">
              <h1>Available on platforms :</h1>
              {info.watchproviders.flatrate.map((w, i) => (
                <img
                  title={w.provider_name}
                  key={i}
                  className="rounded-md h-[5vh] w-[5vh] object-cover "
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}
                    }`}
                  alt=""
                />
              ))}
            </div>
          )}

          {/* On rent */}

          {info.watchproviders && info.watchproviders.rent && (
            <div className="flex gap-5 items-center ">
              <h1>Available on rent :</h1>
              {info.watchproviders.rent.map((w, i) => (
                <img
                  title={w.provider_name}
                  key={i}
                  className="rounded-md h-[5vh] w-[5vh] object-cover "
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}
                    }`}
                  alt=""
                />
              ))}
            </div>
          )}

          {/* To buy */}

          {info.watchproviders && info.watchproviders.buy && (
            <div className="flex gap-5 items-center ">
              <h1>Available to buy :</h1>
              {info.watchproviders.buy.map((w, i) => (
                <img
                  title={w.provider_name}
                  key={i}
                  className="rounded-md h-[5vh] w-[5vh] object-cover "
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}
                    }`}
                  alt=""
                />
              ))}
            </div>
          )}
        </div>

        {/* Part 4 Seasons */}

        <hr className="mt-5 mb-5" />

        <h1 className="text-xl font-medium">Seasons</h1>

        <div className="flex w-[100%] overflow-y-hidden mb-5 p-5 ">
          {info.details.seasons.length > 0 ? (
            info.details.seasons.map((s, i) => (
              <div key={i} className="w-[15vh] mr-[6%] ">
                <img
                  className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded max-w-[17vw] h-[30vh] object-cover "
                  src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
                  alt=""
                />
                <h1 className="font-medium mt-2 p-1 ">
                  {" "}
                  {s.name || s.title || s.orignal_name || s.orignal_title}
                </h1>
              </div>
            ))
          ) : (
            <h1 className="text-5xl mt-5 font-black text-center text-white ">
              Nothing to Show
            </h1>
          )}
        </div>

        {/* Part 5 Recommendation and Similar */}

        <hr className="mt-5 mb-5" />

        <h1 className="text-xl font-medium">Recommendations & Similar stuff</h1>

        <HorizontalCards
          data={
            info.recommendations.length > 0
              ? info.recommendations
              : info.similar
          }
        />
        <Outlet />
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default TvDetails;
