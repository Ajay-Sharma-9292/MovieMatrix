import React from "react";

import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  document.title = "MovieMatrix | About";
  return (
    <>
      <div className="w-full h-[140vh] bg-[#1F1E24] p-5 flex flex-col text-zinc-300">
        {/* Navigation */}
        <div className="w-full   px-5 flex items-center  ">
          <h1 className="text-4xl flex gap-2 font-semibold text-zinc-300">
            <i
              onClick={() => navigate(-1)}
              className="hover:text-[#6556CD]  ri-arrow-left-line"
            ></i>
            About
          </h1>
        </div>
        {/* Details */}
        <div className="w-full p-5 mt-5">
          <h1 className="text-2xl font-light text-zinc-300">
            Welcome to{" "}
            <span className="font-semibold text-[#6556CD] ">MovieMatrix</span> ,
            your ultimate destination for exploring the world of entertainment!
            With a rich and diverse collection of movies and TV shows from
            across the globe, MovieMate is designed to provide you with a
            seamless and enjoyable experience in discovering, learning, and
            enjoying everything the entertainment world has to offer.
          </h1>
          {/* Features */}
          <h1 className="mt-5 text-2xl font-medium text-zinc-400 ">
            Unique Features :
          </h1>
          <h1 className="flex flex-col font-medium mt-5 text-lg">
            <span className="text-[#6556CD]">
              1. Global Search Capabilities:
            </span>
            <span className="ml-5 mt-2 text-sm">
              Our powerful search engine lets you find any movie, TV show, or
              actor from anywhere in the world. Whether you're in the mood for a
              Hollywood blockbuster, a Bollywood hit, or an indie gem from
              Europe, MovieMate brings it all to you with just a few taps.
            </span>
          </h1>
          <h1 className="flex flex-col font-medium mt-5 text-lg">
            <span className="text-[#6556CD]">
              2. Trending and Popular Sections:
            </span>
            <span className="ml-5 mt-2 text-sm">
              Stay in the loop with our Trending section, featuring the most
              talked-about movies and TV shows currently making waves. Check out
              the Popular page to see what’s captivating audiences globally, and
              never miss out on the next big thing!
            </span>
          </h1>
          <h1 className="flex flex-col font-medium mt-5 text-lg">
            <span className="text-[#6556CD]">3. Watch Trailers Instantly:</span>
            <span className="ml-5 mt-2 text-sm">
              Preview the latest releases or revisit iconic trailers with our
              integrated trailer player. Enjoy high-quality video content that
              lets you glimpse into the world of upcoming movies and TV shows
              before you watch them.
            </span>
          </h1>
          <h1 className="flex flex-col font-medium mt-5 text-lg">
            <span className="text-[#6556CD]">
              4. Personalized Recommendations Just for You:
            </span>
            <span className="ml-5 mt-2 text-sm">
              Enjoy a tailored experience with content recommendations based on
              your viewing habits and preferences. Whether you're into action,
              drama, comedy, or documentaries, MovieMate offers personalized
              suggestions that align with your taste.
            </span>
          </h1>
          <h1 className="flex flex-col font-medium mt-5 text-lg">
            <span className="text-[#6556CD]">
              5. Dedicated Spaces for Movies and TV Shows:
            </span>
            <span className="ml-5 mt-2 text-sm">
              Navigate through a dedicated Movies page and a TV Shows page, each
              providing a curated selection of content across genres, languages,
              and regions. Discover new favorites or rediscover old classics
              with ease.
            </span>
          </h1>
          <h1 className="flex flex-col font-medium mt-5 text-lg">
            <span className="text-[#6556CD]">
              6. Discover the People Behind the Magic:
            </span>
            <span className="ml-5 mt-2 text-sm">
              Explore the People page, a comprehensive database of actors,
              directors, and other creative talents from around the world. Dive
              into their biographies, filmographies, awards, and much more to
              get closer to the stars who bring your favorite stories to life.
            </span>
          </h1>
          {/* Ending quote */}
          <h1 className="mt-10 text-lg font-medium ">
            Why Choose
            <span className="text-[#6556CD] font-semibold text-xl">
              MovieMatrix
            </span>
            ?
          </h1>
          <h1 className="text-lg font-light text-zinc-300 mt-3">
            At{" "}
            <span className="text-[#6556CD] text-xl font-semibold ">
              MovieMatrix
            </span>
            , we believe in delivering a complete entertainment experience that
            goes beyond just watching. We provide you with tools to explore,
            learn, and enjoy, ensuring you are always connected with the stories
            and stars that matter to you. With MovieMate, your entertainment
            journey is limitless!
          </h1>

          <h1 className="text-xl my-10">
            Join us today and make{" "}
            <span className="text-[#6556CD] text-2xl font-semibold mr-1">
              MovieMatrix
            </span>
            your go-to app for everything movies and TV shows!
          </h1>
        </div>
      </div>
    </>
  );
};

export default About;
